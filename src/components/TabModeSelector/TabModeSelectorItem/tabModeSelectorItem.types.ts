import { SignInMode } from 'screens/SignInScreen/signInScreen.types';

export interface ITabModeSelectorItemProps {
  currentValue: SignInMode;
  changeValue: (newValue: SignInMode) => void;
  data: ITabModeSelectorItemData;
}

export interface ITabModeSelectorItemData {
  title: string;
  value: SignInMode;
}
