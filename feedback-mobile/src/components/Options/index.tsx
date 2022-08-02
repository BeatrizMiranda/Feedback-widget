import React from 'react';
import { View, Text } from 'react-native';
import CopyRight from '../CopyRight';
import Option from '../Option';

import { styles } from './styles';
import { FeedbackType } from '../Widget'; 
import { feedbackTypes } from '../../utils/feedbackTypes';

interface Props {
  handleSelectOption: (feedbackType: FeedbackType) => void
}

const Options = ({ handleSelectOption }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Deixe seu feedback
      </Text>
      <View style={styles.options}>
        {
          Object.entries(feedbackTypes).map(([key, value]) => (
            <Option
              key={key}
              image={value.image}
              title={value.title}
              onPress={() => handleSelectOption(key as FeedbackType)}
            />
          ))
        }
      </View>
      <CopyRight />
    </View>
  );
}

export default Options