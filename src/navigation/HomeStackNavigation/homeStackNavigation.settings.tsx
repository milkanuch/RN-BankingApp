import { StackNavigationOptions } from '@react-navigation/stack';

import AppHeader from 'components/AppHeader/AppHeader';
import { colors } from 'constants/colors';

export const HOME_SCREEN_OPTIONS: StackNavigationOptions = {
  headerTitle: () => <AppHeader />,
  headerStyle: {
    backgroundColor: colors.white,
  },
  headerShadowVisible: false,
};

export const NEW_CARD_SCREEN_OPTIONS: StackNavigationOptions = {
  headerTitle: () => <AppHeader />,
  headerStyle: {
    backgroundColor: colors.light.primary[400],
  },
  headerShadowVisible: false,
};
