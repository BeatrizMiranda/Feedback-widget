import React, { useState } from 'react';
import { ArrowLeft } from 'phosphor-react-native';
import { captureScreen } from 'react-native-view-shot'
import { View, TextInput, Image, Text,TouchableOpacity } from 'react-native'
import * as FileSystem from 'expo-file-system'

import { feedbackTypes } from '../../utils/feedbackTypes';
import { theme } from '../../theme';

import { api } from '../../libs/api';
import { FeedbackType } from '../Widget';
import ScreenShotButton from '../ScreenshotButton';
import Button from '../Button';

import { styles } from './styles';

interface Props {
  feedbackType: FeedbackType,
  handleBackButtonClick: () => void,
  onFeedbackSent: () => void
}

const Forms = ({ feedbackType, handleBackButtonClick, onFeedbackSent }: Props) => {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [hasError, setHasError] = useState(false)
  const [comment, setComment] = useState<string>('')
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
    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' }) 
    
    try {      
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64,${screenshotBase64}`,
        comment
      })
      
      onFeedbackSent()
    } catch (error) {
      console.error(`error ${error}`)
      setHasError(true)
      setIsSendingFeedback(false)
    } 
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
      
      {hasError && <Text style={styles.errorText}>Something went wrong, please try again later</Text>}

      <TextInput 
        multiline
        onFocus={() => setHasError(false)}
        onChangeText={setComment}
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