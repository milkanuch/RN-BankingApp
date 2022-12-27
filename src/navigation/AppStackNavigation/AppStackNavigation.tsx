import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TransactionDetailInfo from 'screens/AllTransactionsScreen/TransactionDetailInfo/TransactionDetailInfo';

import BottomNavigation from 'navigation/BottomNavigation';

import TransactionStatusScreen from 'screens/TransactionStatusScreen/TransactionStatusScreen';

import {
  AppStackNavigationParamsList,
  AppStackNavigationTypes,
} from './appStackNavigation.types';

import {
  ALL_TRANSACTIONS_OPTIONS,
  TRANSACTION_DETAIL_OPTIONS,
  TRANSFER_STATUS_SCREEN_OPTION,
} from './appStackNavigation.settings';

const Stack = createStackNavigator<AppStackNavigationParamsList>();

const AppStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppStackNavigationTypes.AppBottomTabNavigation}
        component={BottomNavigation}
        options={ALL_TRANSACTIONS_OPTIONS}
      />
      <Stack.Screen
        name={AppStackNavigationTypes.TransactionStatus}
        component={TransactionStatusScreen}
        options={TRANSFER_STATUS_SCREEN_OPTION}
      />
      <Stack.Screen
        name={AppStackNavigationTypes.TransactionDetailInfo}
        component={TransactionDetailInfo}
        options={TRANSACTION_DETAIL_OPTIONS}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigation;
