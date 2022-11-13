import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

import { BottomTypeProps } from '../AppNavigation/appNavigation.types';

export enum HomeStackScreenTypes {
  Home = 'Home',
  NewCard = 'NewCard',
}

export type HomeStackParamsList = {
  [HomeStackScreenTypes.Home]: undefined;
  [HomeStackScreenTypes.NewCard]: undefined;
};

export type HomeScreenProps = StackScreenProps<
  HomeStackParamsList,
  HomeStackScreenTypes.Home
>;

export type NewCardScreenProps = CompositeNavigationProp<
  BottomTypeProps,
  StackNavigationProp<HomeStackParamsList>
>;
