import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export enum BottomTabsScreenTypes {
  HomeStack = 'HomeStack',
  MoneyTransfer = 'MoneyTransfer',
  IncomeExpense = 'IncomуExpense',
  CardSettings = 'CardSettings',
  Profile = 'Profile',
}

export type BottomTabsParamsList = {
  [BottomTabsScreenTypes.HomeStack]: undefined;
  [BottomTabsScreenTypes.MoneyTransfer]: undefined;
  [BottomTabsScreenTypes.IncomeExpense]: undefined;
  [BottomTabsScreenTypes.CardSettings]: undefined;
  [BottomTabsScreenTypes.Profile]: undefined;
};

export type BottomTypeProps = BottomTabNavigationProp<
  BottomTabsParamsList,
  BottomTabsScreenTypes.HomeStack
>;
