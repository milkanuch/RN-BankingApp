import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export enum BottomTabsScreenTypes {
  HomeStack = 'HomeStack',
  MoneyTransferStack = 'MoneyTransferStack',
  IncomeExpensesStack = 'IncomeExpensesStack',
  CardSettingsStack = 'CardSettingsStack',
  ProfileStack = 'ProfileStack',
}

export type BottomTabsParamsList = {
  [BottomTabsScreenTypes.HomeStack]: undefined;
  [BottomTabsScreenTypes.MoneyTransferStack]: undefined;
  [BottomTabsScreenTypes.IncomeExpensesStack]: undefined;
  [BottomTabsScreenTypes.CardSettingsStack]: undefined;
  [BottomTabsScreenTypes.ProfileStack]: undefined;
};

export type BottomTypeProps = BottomTabNavigationProp<
  BottomTabsParamsList,
  BottomTabsScreenTypes.HomeStack
>;

export type FrequentlyUsedButtonProps = CompositeNavigationProp<
  BottomTypeProps,
  StackNavigationProp<BottomTabsParamsList>
>;
