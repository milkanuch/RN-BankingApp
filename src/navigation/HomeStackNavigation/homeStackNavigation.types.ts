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
};

export type NewCardScreenProps = CompositeNavigationProp<
  BottomTypeProps,
  StackNavigationProp<HomeStackParamsList>
>;
