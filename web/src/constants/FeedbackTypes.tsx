import bugImageUrl from "../assets/bug.png"
import ideaImageUrl from "../assets/idea.png"
import thoughtImageUrl from "../assets/thought.png"

export type TFeedbackOptions = keyof typeof feedbackTypes

export const feedbackTypes = {
  BUG: {
    title: 'Problem',
    icon: {
      source: bugImageUrl,
      alt: 'bug icon'
    }
  },
  IDEA: {
    title: 'Idea',
    icon: {
      source: ideaImageUrl,
      alt: 'lamp icon'
    }
  },
  OTHER: {
    title: 'Other',
    icon: {
      source: thoughtImageUrl,
      alt: 'cloud icon'
    }
  } 
}