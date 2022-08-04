import { useState } from "react";
import { ToolTip, Link } from "../styles/widgetStyle";
import { TFeedbackOptions } from "../../constants/FeedbackTypes";
import WidgetOptions from "./steps/WidgetOptions";
import OptionContent from "./steps/OptionContent";
import SuccessForm from "./steps/SuccessForm";
import ErrorPage from "./steps/ErrorPage";

const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<TFeedbackOptions | null>()
  const [isFeedbackSend, setIsFeedbackSend] = useState<boolean>(false)
  const [hasError, setHasError] = useState(false)
  
  const clearForm = () => {
    setHasError(false)
    setFeedbackType(null)
    setIsFeedbackSend(false)
  }
  
  const renderFeedbackBody = () => {
    if (hasError) return <ErrorPage clearForm={clearForm} />
    if (!feedbackType) return <WidgetOptions setFeedbackType={setFeedbackType} />
    if (isFeedbackSend) return <SuccessForm clearForm={clearForm} />
    
    return (
      <OptionContent
        feedbackType={feedbackType}
        clearForm={clearForm}
        onFeedbackSend={() => setIsFeedbackSend(true)}
        onFeedbackError={() => setHasError(true)}
      />
    )
  }

  return (
    <ToolTip>
      {renderFeedbackBody()}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <Link href="https://github.com/BeatrizMiranda" target="_blank">
          Bea
        </Link>
      </footer>
    </ToolTip>
  );
};

export default WidgetForm;
