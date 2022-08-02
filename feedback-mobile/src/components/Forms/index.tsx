import React, { useState } from 'react';
import { ArrowLeft } from 'phosphor-react-native';
import { View, TextInput, Image, Text,TouchableOpacity } from 'react-native'
import { captureScreen } from 'react-native-view-shot'

import { feedbackTypes } from '../../utils/feedbackTypes';
import { theme } from '../../theme';

import Button from '../Button';
import ScreenShotButton from '../ScreenshotButton';
import { FeedbackType } from '../Widget';

import { styles } from './styles';

interface Props {
  feedbackType: FeedbackType,
  handleBackButtonClick: () => void,
  onFeedbackSent: () => void
}

const Forms = ({ feedbackType, handleBackButtonClick, onFeedbackSent }: Props) => {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)
  const feedbackTypesInfo = feedbackTypes[feedbackType]
  
  const handleScreenshot = () => {
    captureScreen({
      format: 'jpg',
      quality: 0.8,
    })
      .then(uri => setScreenshot(uri))
      .catch(error => console.error(error))
  }
  
  const handleRemoveScreenshot = () => setScreenshot(null)
  
  const handleSendFeedback = async () => {
    if (isSendingFeedback) return

    setIsSendingFeedback(true)
    
    
    
    
    setIsSendingFeedback(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackButtonClick}>
          <ArrowLeft 
            size={24}
            weight='bold'
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        
        <View style={styles.titleContainer}>
          <Image
            source={feedbackTypesInfo.image}
            style={styles.image}
          />
          <Text style={styles.title}>
            {feedbackTypesInfo.title}
          </Text>
        </View>
      </View>
      
      <TextInput 
        multiline
        style={styles.input}
        placeholder='Algo não está funcionando? Queremos corrigir Conte com detalher o que está acontecendo...'
        placeholderTextColor={theme.colors.text_secondary}
      />
      
      <View style={styles.footer}>
        <ScreenShotButton
          onTakeShot={handleScreenshot}
          onRemoveShot={handleRemoveScreenshot}
          screenshot={screenshot}
        />
        <Button
          isLoading={isSendingFeedback}
          onPress={handleSendFeedback}  
        />
      </View>
    </View>
  );
}

export default Forms