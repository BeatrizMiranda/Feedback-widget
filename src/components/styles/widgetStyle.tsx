import tw from "tailwind-styled-components"
import { Popover } from '@headlessui/react'

const ToolTip = tw.div`
  p-4
  bg-zinc-900
  relative
  rounded-2xl
  mb-4
  flex
  flex-col
  items-center
  shadow-lg
  mw-20
  
  w-[calc(100vw-2rem)]
  md:w-auto
`

const TextArea = tw.textarea`
  min-w-[304px]
  min-h-[112px]
  w-full
  
  text-sm
  placeholder-zinc-400
  text-zinc-100
  
  border-zinc-600
  bg-transparent
  rounded-md
  resize-none
  
  focus:border-brand-500
  focus:ring-brand-500
  focus:ring-1
  focus:outline-none
  
  scrollbar
  scrollbar-thumb-zinc-700
  scrollbar-track-transparent
  scrollbar-thin
`

const Button = tw.button`
  p-2
  bg-brand-500
  rounded-md
  border-transparent
  flex-1
  flex
  justify-center
  items-center
  text-md
  hover:bg-brand-300
  focus:outline-none
  focus:ring-2
  focus:ring-offset-2
  focus:ring-offset-zinc-900
  focus:ring-brand-500
  transition-colors
  
  disabled:opacity-50
  disabled:hover:bg-brand-500
`

const Link = tw.a`
  underline
  underline-offset-2
`

const FeedbackOption = tw.button`
  focus:outline-none
  bg-zinc-800
  rounded-lg
  py-5
  w-24
  flex-1
  flex
  items-center
  flex-col
  gap-2
  border-2
  border-transparent
  hover:border-brand-500
  focus:border-brand-500
`

const PopoverContainer = tw(Popover)`
  absolute
  right-4
  bottom-4
  md:bottom-8
  md:right-8
  flex
  flex-col
  items-end
`

const PopoverButton = tw(Popover.Button)`
  px-3
  h-12
  text-white
  rounded-full
  drop-shadow-md

  flex
  items-center
  group

  bg-brand-500

  hover:bg-brandHover-500
  duration-500
  transition-all
`

export {
  Link,
  Button,
  ToolTip,
  TextArea,
  PopoverButton,
  FeedbackOption,
  PopoverContainer
}