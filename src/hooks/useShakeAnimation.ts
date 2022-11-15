import { useCallback, useRef } from 'react';
import { Animated } from 'react-native';

export const useShakeAnimation = () => {
  const animation = useRef(new Animated.Value(0));

  const shake = useCallback(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation.current, {
          toValue: -2,
          duration: 50,
          useNativeDriver: false,
        }),
        Animated.timing(animation.current, {
          toValue: 2,
          duration: 50,
          useNativeDriver: false,
        }),
        Animated.timing(animation.current, {
          toValue: 0,
          duration: 50,
          useNativeDriver: false,
        }),
      ]),
      { iterations: 4 },
    ).start();
  }, []);

  return { animation, shake };
};
