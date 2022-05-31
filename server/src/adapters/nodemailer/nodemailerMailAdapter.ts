import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "666977f86c622c",
    pass: "c4593fb423c5cd"
  }
})

export class NodemailerAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedback <oi@feedback.com>',
      to: 'Beatriz Miranda <biia.mfs@gmail.com>',
      subject,
      html: body
    })
  }
}