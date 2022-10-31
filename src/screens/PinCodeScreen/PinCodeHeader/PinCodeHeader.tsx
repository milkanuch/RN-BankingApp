import { View, Text } from 'react-native';
import React from 'react';

import styles from './pinCodeHeader.style';

const PinCodeHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.header_text}> LOG IN</Text>
    </View>
  );
};

export default PinCodeHeader;
