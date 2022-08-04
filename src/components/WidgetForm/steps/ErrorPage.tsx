import ClosedButton from "../../ClosedButton"
import { Button } from "../../styles/widgetStyle"
import errorIconUrl from "../../../assets/errorIcon.png"


type TErrorPage = {
  clearForm: () => void
}

const ErrorPage = ({ clearForm }: TErrorPage) => {
  return (
    <>
      <header>
        <ClosedButton />
      </header>
      <div className="flex flex-col items-center py-6 w-[384px]">
      <img src={errorIconUrl} aria-labelledby="errorMessage" className="w-10 h-10"/>
      <span id="errorMessage" className="text-xl mt-5">Something went wrong!</span>
      <span id="errorMessage" className="text-xl mt-1 mb-8"> Please try again later</span>
      <Button type="button" onClick={clearForm}>Try to send another feedback</Button>
      </div>
    </>
  )
}

export default ErrorPage