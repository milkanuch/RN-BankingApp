import { ViewStyle } from 'react-native';

import { SignInMode } from '../../screens/SignInScreen/signInScreen.types';

import { ITabModeSelectorItemData } from './TabModeSelectorItem/tabModeSelectorItem.types';

export interface ITabModeSelectorProps {
  currentValue: SignInMode;
  setNewValue: (signInMode: SignInMode) => void;
  items: ITabModeSelectorItemData[];
  style?: ViewStyle;
}
