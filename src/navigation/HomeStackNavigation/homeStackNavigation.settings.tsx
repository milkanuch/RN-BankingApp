import { StackNavigationOptions } from '@react-navigation/stack';

import AppHeader from 'components/AppHeader/AppHeader';
import { COLORS } from 'constants/colors';

export const HOME_SCREEN_OPTIONS: StackNavigationOptions = {
  headerTitle: () => <AppHeader />,
  headerStyle: {
    backgroundColor: COLORS.white,
  },
  headerShadowVisible: false,
};

export const NEW_CARD_SCREEN_OPTIONS: StackNavigationOptions = {
  headerTitle: () => <AppHeader />,
  headerStyle: {
    backgroundColor: COLORS.light.primary[400],
  },
  headerShadowVisible: false,
};

export const ALL_TRANSACTIONS_OPTIONS: StackNavigationOptions = {
  headerTitle: () => <AppHeader />,
  headerStyle: {
    backgroundColor: COLORS.white,
  },
  headerShadowVisible: false,
};
