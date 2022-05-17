import html2canvas from "html2canvas"
import { Camera, Trash } from "phosphor-react"
import { useState } from "react"
import Loading from "../Loading"

type TScreenshotButton = {
  screenshot: string | null,
  setScreenshot: (screenshot: string) => void,
  clearScreenshot: () => void
}

export const ScreenshotButton = ({ screenshot, setScreenshot, clearScreenshot }: TScreenshotButton) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)
  
  
  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')
    
    setScreenshot(base64image)
    setIsTakingScreenshot(false)
  }
    
  return screenshot ? (
    <button
      type="button"
      className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-100 transition-colors"
      style={{ backgroundImage: `url(${screenshot})` }}
      onClick={clearScreenshot}
    >
      <Trash weight="fill" />
    </button>
  ) : (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {isTakingScreenshot ? <Loading/> : <Camera className="w-6 h-6" />}
    </button>
  )
}
