import { StackNavigationOptions } from '@react-navigation/stack';

import AppHeader from 'components/AppHeader/AppHeader';

import { COLORS } from 'constants/colors';

export const CARD_SETTINGS_SCREEN_OPTION: StackNavigationOptions = {
  headerTitle: () => <AppHeader />,
  headerStyle: {
    backgroundColor: COLORS.white,
  },
  headerShadowVisible: false,
};
