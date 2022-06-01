import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase"

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

const createFeedbacksSpy = jest.fn()
const sendMailSpy = jest.fn()

const feedbackUseCase = new SubmitFeedbackUseCase(
  { create: createFeedbacksSpy },
  { sendMail: sendMailSpy },
)

let feedbackParams:SubmitFeedbackUseCaseRequest = {
  type: 'BUG',
  comment: 'lorem ipsum'
}

describe('SubmitFeedbackUseCase', () => {
  beforeEach(() => {
    feedbackParams = {
      type: 'BUG',
      comment: 'lorem ipsum'
    }
  })
  
  describe('Functionalities', () => {
    it('Should call createFeedback', async () => {    
      feedbackUseCase.execute(feedbackParams)
      
      expect(createFeedbacksSpy).toHaveBeenCalledWith(feedbackParams)
    })  

    it('Should call sendMail', async () => {    
      feedbackUseCase.execute(feedbackParams)
      
      expect(sendMailSpy).toHaveBeenCalled()
    })  
  })

  describe('Error validations', () => {
    it('Should throw error with wrong screenshot data', async () => {
      feedbackParams.screenshot = 'not_valid_data'
    
      await expect(feedbackUseCase.execute(feedbackParams))
        .rejects
        .toThrow('Invalid screenshot format.');
    })
    
    it('Should validate screenshot data', async () => {
      feedbackParams.screenshot = 'data:image/png;base64'
    
      await expect(feedbackUseCase.execute(feedbackParams))
        .resolves.not.toThrow()
    })
    
    it('Should validate empty type data', async () => {
      feedbackParams.type = ''
      
      await expect(feedbackUseCase.execute(feedbackParams))
      .rejects
      .toThrow('Invalid empty value for type.');
    })
    
    it('Should validate comment data', async () => {
      feedbackParams.comment = ''
    
      await expect(feedbackUseCase.execute(feedbackParams))
      .rejects
      .toThrow('Invalid empty value for comment.');
    })
    
    it('Should validate comment data', async () => {
      feedbackParams.comment = ''
    
      await expect(feedbackUseCase.execute(feedbackParams))
      .rejects
      .toThrow('Invalid empty value for comment.');
    })
    
    it('Should validate type and comment data', async () => {
      feedbackParams.type = ''
      feedbackParams.comment = ''
      
      await expect(feedbackUseCase.execute(feedbackParams))
      .rejects
      .toThrow('Invalid empty value for type and comment.');
    })
  })
})