import { ViewStyle } from 'react-native';

import { ITabModeSelectorItemData } from './TabModeSelectorItem/tabModeSelectorItem.types';

export interface ITabModeSelectorProps {
  currentValue: any;
  setNewValue: (signInMode: any) => void;
  items: ITabModeSelectorItemData[];
  style?: ViewStyle;
}
