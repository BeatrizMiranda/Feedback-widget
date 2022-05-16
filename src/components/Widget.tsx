import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { PopoverButton, PopoverContainer } from './styles/widgetStyle.js'
import WidgetForm from './WidgetForm/index.js'

const Widget = () => {
  return (
    <PopoverContainer>
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      <PopoverButton>
        <ChatTeardropDots className="w-6 h-6" color="white" />
        <div className="max-w-0 overflow-hidden group-focus:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          <span className="pr-1">
            Feedback
          </span>
        </div>
      </PopoverButton>
    </PopoverContainer>
  )
}

export default Widget