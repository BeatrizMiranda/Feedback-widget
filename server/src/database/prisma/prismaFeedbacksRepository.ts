import { prisma } from "../../prisma";
import { FeedbackCreateContent, FeedbacksRepository } from "../feedbacksRepository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot}: FeedbackCreateContent) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      } 
    })
  };
}