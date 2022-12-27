import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from 'screens/HomeScreen/HomeScreen';

import NewCardScreen from 'screens/NewCardScreen/NewCardScreen';

import CardSettingsScreen from 'screens/CardSettingsScreen/CardSettingsScreen';

import ProfileScreen from 'screens/ProfileScreen/ProfileScreen';

import AllTransactionsScreen from 'screens/AllTransactionsScreen/AllTransactionsScreen';

import {
  ALL_TRANSACTIONS_OPTIONS,
  HOME_SCREEN_OPTIONS,
  NEW_CARD_SCREEN_OPTIONS,
} from './homeStackNavigation.settings';

import {
  HomeStackParamsList,
  HomeStackScreenTypes,
} from './homeStackNavigation.types';

const Stack = createStackNavigator<HomeStackParamsList>();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HomeStackScreenTypes.Home}
        component={HomeScreen}
        options={HOME_SCREEN_OPTIONS}
      />
      <Stack.Screen
        name={HomeStackScreenTypes.CardSettings}
        component={CardSettingsScreen}
        options={HOME_SCREEN_OPTIONS}
      />
      <Stack.Screen
        name={HomeStackScreenTypes.NewCard}
        component={NewCardScreen}
        options={NEW_CARD_SCREEN_OPTIONS}
      />
      <Stack.Screen
        name={HomeStackScreenTypes.Profile}
        component={ProfileScreen}
        options={HOME_SCREEN_OPTIONS}
      />
      <Stack.Screen
        name={HomeStackScreenTypes.AllTransfers}
        component={AllTransactionsScreen}
        options={ALL_TRANSACTIONS_OPTIONS}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;
