import { ArrowLeft } from "phosphor-react"
import { Dispatch, SetStateAction, useState } from "react"
import { feedbackTypes, TFeedbackOptions } from "../../../constants/FeedbackTypes"
import { ScreenshotButton } from "../../ScreenshotButton"
import { Button, TextArea } from "../../styles/widgetStyle"
import ClosedButton from "../../ClosedButton"

type TOptionContentProps = {
  feedbackType: TFeedbackOptions
  clearForm: () => void
  onFeedbackSend: () => void
}

const OptionContent = ({ feedbackType, clearForm, onFeedbackSend }: TOptionContentProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState<string | null>(null)
  const { icon, title } = feedbackTypes[feedbackType]
    
  const clearScreenshot = () => setScreenshot(null)
  
  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault()
    console.log({
      type: title,
      screenshot,
      comment
    })
    
    onFeedbackSend()
  }

  return (
    <>
      <header>
        <button onClick={clearForm} className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <div className="flex gap-2 items-center">
          <img src={icon.source} alt={icon.alt} className="w-6 h-6"/>
          <span className="text-xl leading-6">{title}</span>
        </div>
        <ClosedButton />
      </header>
      <form onSubmit={handleSubmitForm} className="my-4 w-full">
        <TextArea
          placeholder="Conte com detalhes o que está acontecendo"
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setComment(event.target.value)}
        />
        
        <footer className="flex gap-2 mt-2" >
          <ScreenshotButton screenshot={screenshot} setScreenshot={setScreenshot} clearScreenshot={clearScreenshot} />
          <Button disabled={!comment?.length} type="submit"> Enviar Feedback </Button>
        </footer>
      </form>
    </>
  )
}

export default OptionContent