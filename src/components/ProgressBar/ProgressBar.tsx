import { View } from 'react-native';
import React, { useEffect, FC } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import styles from './progressBar.styles';
import { PROGRESS_BAR_ANIMATION_DURATION } from './progressBar.settings';
import { IProgressBarProps } from './progressBar.types';

const ProgressBar: FC<IProgressBarProps> = ({
  progressLimit,
  progressLine,
  style,
}) => {
  const progress = useSharedValue(0);

  const progressBarWidth = useAnimatedStyle(() => {
    return {
      width: `${(progress.value / progressLimit) * 100}%`,
    };
  }, [progressLimit]);

  useEffect(() => {
    progress.value = withTiming(progressLine, {
      duration: PROGRESS_BAR_ANIMATION_DURATION,
    });

    return () => {
      progress.value = 0;
    };
  }, [progress, progressLine]);

  return (
    <View style={styles.progressBarContainer}>
      <Animated.View style={[styles.progressBar, progressBarWidth, style]} />
    </View>
  );
};

export default ProgressBar;
