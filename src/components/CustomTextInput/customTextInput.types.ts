import { ViewStyle } from 'react-native';

export interface ICustomTextInputProps {
  title?: string;
  hintText?: string;
  secureTextEntry?: boolean;
  value: string;
  setValue: (text: string) => void;
  style?: ViewStyle;
}
