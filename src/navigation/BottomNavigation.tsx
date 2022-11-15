import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackNavigation from './HomeStackNavigation/HomeStackNavigation';
import {
  CARD_SETTINGS_STACK_OPTION,
  HOME_STACK_OPTIONS,
  INCOME_EXPENSES_STACK_OPTION,
  PROFILE_STACK_OPTION,
  TRANSFER_STACK_OPTION,
} from './AppNavigation/appNavigation.settings';

import {
  BottomTabsParamsList,
  BottomTabsScreenTypes,
} from './AppNavigation/appNavigation.types';
import TransferStackNavigation from './TransferStackNavigation/TransferStackNavigation';
import IncomeExpensesStackNavigation from './IncomeExpensesStackNavigation/IncomeExpensesStackNavigation';
import CardSettingsStackNavigation from './CardSettingsStackNavigation/CardSettingsStackNavigation';
import ProfileStackNavigation from './ProfileStackNavigation/ProfileStackNavigation';

const BottomTab = createBottomTabNavigator<BottomTabsParamsList>();

const BottomNavigation = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={BottomTabsScreenTypes.HomeStack}
        component={HomeStackNavigation}
        options={HOME_STACK_OPTIONS}
      />
      <BottomTab.Screen
        name={BottomTabsScreenTypes.MoneyTransferStack}
        component={TransferStackNavigation}
        options={TRANSFER_STACK_OPTION}
      />
      <BottomTab.Screen
        name={BottomTabsScreenTypes.IncomeExpensesStack}
        component={IncomeExpensesStackNavigation}
        options={INCOME_EXPENSES_STACK_OPTION}
      />
      <BottomTab.Screen
        name={BottomTabsScreenTypes.CardSettingsStack}
        component={CardSettingsStackNavigation}
        options={CARD_SETTINGS_STACK_OPTION}
      />
      <BottomTab.Screen
        name={BottomTabsScreenTypes.ProfileStack}
        component={ProfileStackNavigation}
        options={PROFILE_STACK_OPTION}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;
