import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { BottomTypeProps } from 'navigation/AppNavigation/appNavigation.types';

export enum HomeStackScreenTypes {
  Home = 'Home',
  NewCard = 'NewCard',
  HomeTransfer = 'HomeTransfer',
  IncomуExpense = 'IncomуExpense',
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
  [HomeStackScreenTypes.IncomуExpense]: undefined;
};

export type NewCardScreenProps = CompositeNavigationProp<
  BottomTypeProps,
  StackNavigationProp<HomeStackParamsList>
>;

export type CardSettingsScreenProps = CompositeNavigationProp<
  BottomTypeProps,
  StackNavigationProp<HomeStackParamsList>
>;

export type AppHeaderProps = CompositeNavigationProp<
  BottomTypeProps,
  StackNavigationProp<HomeStackParamsList>
>;

export type DepositWidthdrawlsProps = CompositeNavigationProp<
  BottomTypeProps,
  StackNavigationProp<HomeStackParamsList>
>;
