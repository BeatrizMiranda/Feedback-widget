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
      `</div>`,
    ].join('')
    
    this.mailAdapter.sendMail({
      subject: 'Novo Feedback', 
      body: emailBody
    })
  } 
}