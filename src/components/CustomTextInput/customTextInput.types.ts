import { TextInputProps, ViewStyle } from 'react-native';

export interface ICustomTextInputProps extends TextInputProps {
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
