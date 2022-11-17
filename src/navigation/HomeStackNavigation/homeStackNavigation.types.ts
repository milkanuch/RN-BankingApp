import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { BottomTypeProps } from '../AppNavigation/appNavigation.types';

export enum HomeStackScreenTypes {
  Home = 'Home',
  NewCard = 'NewCard',
  Transfer = 'Transfer',
  IncomуExpense = 'IncomуExpense',
  CardSettings = 'CardSettings',
  Profile = 'Profile',
}

export type HomeStackParamsList = {
  [HomeStackScreenTypes.Home]: undefined;
  [HomeStackScreenTypes.NewCard]: undefined;
  [HomeStackScreenTypes.CardSettings]: undefined;
  [HomeStackScreenTypes.Profile]: undefined;
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
