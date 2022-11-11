import { Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';

import styles from './pinCodeFooter.style';
import { IPinCodeFooterProps } from './pinCodeFooter.types';

const PinCodeFooter: FC<IPinCodeFooterProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text} adjustsFontSizeToFit numberOfLines={1}>
        Log in via phone number
      </Text>
    </TouchableOpacity>
  );
};

export default PinCodeFooter;
