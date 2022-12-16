import { StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';

import AppHeader from 'components/AppHeader/AppHeader';

import { COLORS } from 'constants/colors';

export const INCOME_EXPENSES_SCREEN_OPTION: StackNavigationOptions = {
  headerShadowVisible: false,
  headerTitle: () => <AppHeader />,
  headerStyle: {
    backgroundColor: COLORS.white,
  },
};
