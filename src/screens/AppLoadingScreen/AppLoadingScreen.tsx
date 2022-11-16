import React, { FC, useEffect } from 'react';
import { View } from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import {
  ANIMATE_TO_VALUE,
  ANIMATION_DURATION,
  IS_WITH_REVERSE,
  NUMBER_OF_REPS,
} from './appLoadingScreen.settings';

import styles from './appLoadingScreen.styles';

import {
  IAppLoadingScreen,
  AppLoadingScreenTheme,
} from './appLoadingScreen.types';

const AppLoadingScreen: FC<IAppLoadingScreen> = ({
  theme = AppLoadingScreenTheme.Dark,
}) => {
  const progress = useSharedValue(0.9);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: progress.value }],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(ANIMATE_TO_VALUE, { duration: ANIMATION_DURATION }),
      NUMBER_OF_REPS,
      IS_WITH_REVERSE,
    );
  }, [progress]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.loader, animatedStyles, theme && styles[theme]]}
      />
    </View>
  );
};

export default AppLoadingScreen;
