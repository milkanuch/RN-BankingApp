import { ViewStyle } from 'react-native';

export interface IAppHeaderButtonProps {
  iconName: string;
  iconSize: number;
  style?: ViewStyle;
  onPress: () => void;
}
