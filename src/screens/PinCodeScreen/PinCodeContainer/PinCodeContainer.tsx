import { View, Text, Animated } from 'react-native';
import React, { FC } from 'react';

import styles from './pinCodeContainer.style';
import { IPinCodeContainerProps } from './pinCodeContainer.types';

export const PinCodeContainer: FC<IPinCodeContainerProps> = ({
  pinCode,
  animation,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter your Pin-Code</Text>
      <Animated.View style={{ transform: [{ translateX: animation.current }] }}>
        <View style={styles.codeContainer}>
          {pinCode.map((p, index) => {
            return (
              <View
                style={[styles.codeEmpty, !!p && styles.codeFull]}
                key={index.toString()}
              />
            );
          })}
        </View>
      </Animated.View>
    </View>
  );
};
