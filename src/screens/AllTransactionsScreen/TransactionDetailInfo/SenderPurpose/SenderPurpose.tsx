import { View, Text } from 'react-native';
import React, { FC } from 'react';

import styles from './senderPurpose.styles';
import { ISenderPurpose } from './senderPurpose.types';

const SenderPurpose: FC<ISenderPurpose> = ({ text }) => {
  return (
    <View style={styles.senderPurposeContainer}>
      <Text style={styles.senderPurposeTitle}>Sender Purpose:</Text>
      <Text style={styles.senderPurposeText}>{text}</Text>
    </View>
  );
};

export default SenderPurpose;
