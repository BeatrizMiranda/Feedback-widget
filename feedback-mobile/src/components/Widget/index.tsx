import React, { useRef, useMemo } from 'react'
import { TouchableOpacity } from 'react-native'
import { ChatTeardropDots } from 'phosphor-react-native'
import BottomSheet from '@gorhom/bottom-sheet'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import { theme } from '../../theme'
import { styles } from './styles'
import Options from '../Options'

const Widget = () => {  
  const bottomSheetRef = useRef<BottomSheet>(null)
  
  const handleOpen = () => {
    bottomSheetRef.current?.expand()
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
        <Options />
      </BottomSheet>
    </>
  )
}

export default gestureHandlerRootHOC(Widget)