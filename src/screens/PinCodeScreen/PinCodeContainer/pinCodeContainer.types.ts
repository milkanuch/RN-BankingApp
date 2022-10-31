import { Animated } from 'react-native';

export interface IPinCodeContainerProps {
  pinCode: string[];
  animation: React.MutableRefObject<Animated.Value>;
}
