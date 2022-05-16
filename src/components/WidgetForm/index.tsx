import { useState } from "react";
import { ToolTip, Link } from "../styles/widgetStyle";
import { TFeedbackOptions } from "../../constants/FeedbackTypes";
import ClosedButton from "../ClosedButton";
import WidgetOptions from "./steps/WidgetOptions";
import OptionContent from "./steps/OptionContent";

const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<TFeedbackOptions | null>();

  return (
    <ToolTip>
      {!feedbackType ? (
        <WidgetOptions setFeedbackType={setFeedbackType} />
      ) : (
        <OptionContent feedbackType={feedbackType} setFeedbackType={setFeedbackType} />
      )}
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
