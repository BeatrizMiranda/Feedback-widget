import React from 'react'

import { View, Text, Image, TouchableOpacity } from 'react-native'

import successImg from '../../assets/success.png'
import CopyRight from '../CopyRight'
import { styles } from './styles'

interface Props {
  handleSendOtherFeedback: () => void
}

const Success = ({ handleSendOtherFeedback }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={successImg}
        style={styles.image}
      />
      
      <Text
        style={styles.title}
      >
        Agradecemos o feedback
      </Text>
      
      <TouchableOpacity style={styles.button} onPress={handleSendOtherFeedback}>
        <Text
          style={styles.buttonTitle}
        >
          Quero enviar outro
        </Text>
      </TouchableOpacity>
      
      <CopyRight />
    </View>
  )
}

export default Success