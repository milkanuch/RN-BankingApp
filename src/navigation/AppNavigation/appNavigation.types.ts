import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export enum BottomTabsScreenTypes {
  HomeStack = 'HomeStack',
}

export type BottomTabsParamsList = {
  [BottomTabsScreenTypes.HomeStack]: undefined;
};

export type BottomTypeProps = BottomTabNavigationProp<
  BottomTabsParamsList,
  BottomTabsScreenTypes.HomeStack
>;
