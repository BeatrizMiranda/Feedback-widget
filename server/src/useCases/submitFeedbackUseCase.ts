import { MailAdapter } from "../adapters/mailAdapter";
import { FeedbacksRepository } from "../database/feedbacksRepository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}
  
  async execute(request: SubmitFeedbackUseCaseRequest) { 
    const { type, screenshot, comment } = request
      
    if (screenshot && !screenshot.startsWith('data:image/png;base64')) { 
      throw new Error('Invalid screenshot format.')
    }
      
    if (!type || !comment) {
      const emptyFields = !type && !comment ? 'type and comment' : !type ? 'type' : 'comment'
      throw new Error(`Invalid empty value for ${emptyFields}.`)
    }
    
    this.feedbacksRepository.create({
      type,
      comment,
      screenshot
    })
    
    const emailBody = [
      `<div style="font-family:sans-serif; font-size: 16px; color: #333">`,
      `<h1 style="font-weight: bold; font-size: 18px;">Você recebeu um novo feedback!</h1>`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `<div><p>Screenshot:</p> <br/> ${screenshot && `<img height="500" src="${screenshot}" />`}</div>`,
      `</div>`,
    ].join('')
    
    this.mailAdapter.sendMail({
      subject: 'Novo Feedback', 
      body: emailBody
    })
  } 
}