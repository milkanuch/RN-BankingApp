import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { BottomTypeProps } from '../../../navigation/AppNavigation/appNavigation.types';

export enum FrequentlyUsedButtonTypes {
  MoneyTransferStack = 'MoneyTransferStack',
}

export type FrequentlyUsedButtonParamsList = {
  [FrequentlyUsedButtonTypes.MoneyTransferStack]: undefined;
};

export type FrequentlyUsedButtonProps = CompositeNavigationProp<
  BottomTypeProps,
  StackNavigationProp<FrequentlyUsedButtonParamsList>
>;
