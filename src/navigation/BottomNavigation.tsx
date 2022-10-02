import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackNavigation from './HomeStackNavigation/HomeStackNavigation';
import { HOME_STACK_OPTIONS } from './AppNavigation/appNavigation.settings';

import {
  BottomTabsParamsList,
  BottomTabsScreenTypes,
} from './AppNavigation/appNavigation.types';

const BottomTab = createBottomTabNavigator<BottomTabsParamsList>();

const BottomNavigation = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name={BottomTabsScreenTypes.HomeStack}
        component={HomeStackNavigation}
        options={HOME_STACK_OPTIONS}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;
