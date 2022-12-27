import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { BottomTabsTypeProps } from 'navigation/AppNavigation/appNavigation.types';

export enum HomeStackScreenTypes {
  Home = 'Home',
  NewCard = 'NewCard',
  HomeTransfer = 'HomeTransfer',
  IncomyExpense = 'IncomyExpense',
  CardSettings = 'CardSettings',
  AllTransfers = 'AllTransfers',
  Profile = 'Profile',
}

export type HomeStackParamsList = {
  [HomeStackScreenTypes.Home]: undefined;
  [HomeStackScreenTypes.NewCard]: undefined;
  [HomeStackScreenTypes.CardSettings]: undefined;
  [HomeStackScreenTypes.AllTransfers]: undefined;
  [HomeStackScreenTypes.Profile]: undefined;
  [HomeStackScreenTypes.IncomyExpense]: undefined;
};

export type NewCardScreenProps = CompositeNavigationProp<
  BottomTabsTypeProps,
  StackNavigationProp<HomeStackParamsList>
>;

export type CardSettingsScreenProps = CompositeNavigationProp<
  BottomTabsTypeProps,
  StackNavigationProp<HomeStackParamsList>
>;

export type AppHeaderProps = CompositeNavigationProp<
  BottomTabsTypeProps,
  StackNavigationProp<HomeStackParamsList>
>;

export type DepositWidthdrawlsProps = CompositeNavigationProp<
  BottomTabsTypeProps,
  StackNavigationProp<HomeStackParamsList>
>;
