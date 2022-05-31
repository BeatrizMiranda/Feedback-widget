import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma'

const app = express()

app.use(express.json())

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "666977f86c622c",
    pass: "c4593fb423c5cd"
  }
});

app.post('/feedbacks', async (req, res) => {
  const { type, screenshot, comment } = req.body

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    } 
  })
  
  await transport.sendMail({
    from: 'Equipe Feedback <oi@feedback.com>',
    to: 'Beatriz Miranda <biia.mfs@gmail.com>',
    subject: 'Novo Feedback',
    html: [
      `<div style="font-family:sans-serif; font-size: 16px; color: #333">`,
      `<h1 style="font-weight: bold; font-size: 18px;">Você recebeu um novo feedback!</h1>`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`,
    ].join('')
  })
  
  return res.status(201).json({ data: feedback })
})


app.listen(3333, () => {
  console.log('server running')
})