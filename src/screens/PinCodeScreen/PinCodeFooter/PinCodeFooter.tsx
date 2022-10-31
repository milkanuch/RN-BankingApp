import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from './pinCodeFooter.style';

const PinCodeFooter = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('footer');
      }}>
      <Text style={styles.text} adjustsFontSizeToFit numberOfLines={1}>
        Log in via phone number
      </Text>
    </TouchableOpacity>
  );
};

export default PinCodeFooter;
