import { Dispatch, SetStateAction } from "react"
import { ArrowLeft, Camera } from "phosphor-react"
import { feedbackTypes, TFeedbackOptions } from "../../../constants/FeedbackTypes"
import { Button, TextArea } from "../../styles/widgetStyle"
import ClosedButton from "../../ClosedButton"

type TOptionContentProps = {
  feedbackType: TFeedbackOptions
  setFeedbackType: Dispatch<SetStateAction<"BUG" | "IDEA" | "OTHER" | null | undefined>>
}

const OptionContent = ({ feedbackType, setFeedbackType }: TOptionContentProps) => {
  const { icon, title } = feedbackTypes[feedbackType]
  return (
    <>
      <header>
        <button onClick={() => setFeedbackType(null)} className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <div className="flex gap-2 items-center">
          <img src={icon.source} alt={icon.alt} className="w-6 h-6"/>
          <span className="text-xl leading-6">{title}</span>
        </div>
        <ClosedButton />
      </header>
      <form className="my-4 w-full">
        <TextArea
          placeholder="Conte com detalhes o que está acontecendo"
        />
        
        <footer className="flex gap-2 mt-2">
          <button
            type="button"
            className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
          >
            <Camera className="w-6 h-6 text-zinc-100" />
          </button>
          <Button type="submit"> Enviar Feedback </Button>
        </footer>
      </form>
    </>
  )
}

export default OptionContent