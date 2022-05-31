export interface FeedbackCreateContent {
  type: string;
  comment: string;
  screenshot?: string
}

export interface FeedbacksRepository {
  create: (data: FeedbackCreateContent) => Promise<void>;
}