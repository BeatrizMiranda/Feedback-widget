import React from 'react';
import { View, Text } from 'react-native';
import CopyRight from '../CopyRight';
import Option from '../Option';

import { styles } from './styles';
import { feedbackTypes } from '../../utils/feedbackTypes';

const Options = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Deixe seu feedback
      </Text>
      <View style={styles.options}>
        {
          Object.entries(feedbackTypes).map(([key, value]) => (
            <Option key={key} image={value.image} title={value.title} />
          ))
        }
      </View>
      <CopyRight />
    </View>
  );
}

export default Options