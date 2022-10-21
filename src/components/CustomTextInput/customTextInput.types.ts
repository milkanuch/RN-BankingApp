import { ViewStyle } from 'react-native';

export interface ICustomTextInputProps {
  title?: string;
  hintText?: string;
  placeHolder?: string;
  secureTextEntry?: boolean;
  value: string;
  errorText?: string;
  setValue: (text: string) => void;
  validation?: (value: string) => boolean;
  style?: ViewStyle;
}
