import { View, Text } from 'react-native';
import React, { FC } from 'react';

import { ITitleTextProps } from './titleText.types';
import styles from './titleText.styles';

const TitleText: FC<ITitleTextProps> = ({ textStyle, text, subtitle }) => {
  const selectedTextStyle = subtitle ? styles.subtitleText : styles.titleText;
  return (
    <View style={[styles.container, !subtitle && styles.titleContainer]}>
      <Text style={[selectedTextStyle, textStyle]}>{text}</Text>
    </View>
  );
};

export default TitleText;
