import { Animated } from 'react-native';

export interface IPinCodeContainerProps {
  isLogin: boolean;
  pinCode: string[];
  animation: React.MutableRefObject<Animated.Value>;
}
