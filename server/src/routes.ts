import express from 'express'
import { SubmitFeedbackUseCase } from './useCases/submitFeedbackUseCase'
import { PrismaFeedbacksRepository } from './database/prisma/prismaFeedbacksRepository'
import { NodemailerAdapter } from './adapters/nodemailer/nodemailerMailAdapter'

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodemailerMailAdapter = new NodemailerAdapter()
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  )
  
  await submitFeedbackUseCase.execute({ type, comment, screenshot })

  return res.status(201).send()
})