import { View, Text, Animated } from 'react-native';
import React, { FC } from 'react';

import styles from './pinCodeContainer.styles';
import { IPinCodeContainerProps } from './pinCodeContainer.types';
import {
  EnterPinCodeText,
  RENDER_DOTS,
  RepeatPinCodeText,
} from './pinCodeContainer.settings';

export const PinCodeContainer: FC<IPinCodeContainerProps> = ({
  isLogin,
  pinCode,
  animation,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {isLogin ? EnterPinCodeText : RepeatPinCodeText}
      </Text>
      <Animated.View style={{ transform: [{ translateX: animation.current }] }}>
        <View style={styles.codeContainer}>
          {RENDER_DOTS.map((_, index) => {
            return (
              <View
                style={[styles.codeEmpty, !!pinCode[index] && styles.codeFull]}
                key={index.toString()}
              />
            );
          })}
        </View>
      </Animated.View>
    </View>
  );
};
