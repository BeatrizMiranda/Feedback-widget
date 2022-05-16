import { feedbackTypes, TFeedbackOptions } from "../../../constants/FeedbackTypes";
import ClosedButton from "../../ClosedButton";
import { FeedbackOption } from "../../styles/widgetStyle";

type TWidgetOptionsProps = {
  setFeedbackType: (type: TFeedbackOptions) => void;
};

const WidgetOptions = ({ setFeedbackType }: TWidgetOptionsProps) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe o seu feedback</span>
        <ClosedButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, { title, icon }]) => (
          <FeedbackOption key={key} onClick={() => setFeedbackType(key as TFeedbackOptions)}>
            <span>{title}</span>
            <img src={icon.source} alt={icon.alt} />
          </FeedbackOption>
        ))}
      </div>
    </>
  );
};

export default WidgetOptions;
