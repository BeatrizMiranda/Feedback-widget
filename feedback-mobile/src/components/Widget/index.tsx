import React, { useRef, useState } from 'react'
import BottomSheet from '@gorhom/bottom-sheet'
import { TouchableOpacity } from 'react-native'
import { ChatTeardropDots } from 'phosphor-react-native'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { feedbackTypes } from '../../utils/feedbackTypes'

import { theme } from '../../theme'
import { styles } from './styles'

import Options from '../Options'
import Forms from '../Forms'
import Success from '../Success'

export type FeedbackType = keyof typeof feedbackTypes

const Widget = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null) 
  const [feedbackSent, setFeedbackSent] = useState(false)
  const bottomSheetRef = useRef<BottomSheet>(null)
  
  const handleOpen = () => bottomSheetRef.current?.expand()
  
  const handleBackButtonClick = () => {
    setFeedbackType(null)
    setFeedbackSent(false)
  }
  
  const getContentToShow = () => {
    if (feedbackSent) return <Success handleSendOtherFeedback={() => setFeedbackSent(false)}/>
    if (!feedbackType) return <Options handleSelectOption={setFeedbackType} />
    
    return (
      <Forms
        feedbackType={feedbackType}
        handleBackButtonClick={handleBackButtonClick}
        onFeedbackSent={() => setFeedbackSent(true)}
      />
    )
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          size={30}
          color={theme.colors.text_on_brand_color}
          weight="bold" 
        />
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {getContentToShow()}
      </BottomSheet>
    </>
  )
}

export default gestureHandlerRootHOC(Widget)