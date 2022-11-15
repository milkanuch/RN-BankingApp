import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFeather from 'react-native-vector-icons/Feather';

import { colors } from '../../constants/colors';

export const HOME_STACK_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarIcon: ({ focused }) => (
    <IconFeather
      name="home"
      color={focused ? colors.black : colors.grey}
      size={25}
    />
  ),
};

export const TRANSFER_STACK_OPTION: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarIcon: ({ focused }) => (
    <IconFontisto
      name="arrow-swap"
      color={focused ? colors.black : colors.grey}
      size={25}
    />
  ),
};

export const INCOME_EXPENSES_STACK_OPTION: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarIcon: ({ focused }) => (
    <IconFontisto
      name="clock"
      color={focused ? colors.black : colors.grey}
      size={25}
    />
  ),
};

export const CARD_SETTINGS_STACK_OPTION: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarIcon: ({ focused }) => (
    <IconFeather
      name="credit-card"
      color={focused ? colors.black : colors.grey}
      size={25}
    />
  ),
};
export const PROFILE_STACK_OPTION: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarIcon: ({ focused }) => (
    <IconFeather
      name="settings"
      color={focused ? colors.black : colors.grey}
      size={25}
    />
  ),
};
