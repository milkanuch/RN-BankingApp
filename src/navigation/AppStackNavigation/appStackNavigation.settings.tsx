import { StackNavigationOptions } from '@react-navigation/stack';

export const ALL_TRANSACTIONS_OPTIONS: StackNavigationOptions = {
  headerShown: false,
};

export const TRANSACTION_DETAIL_OPTIONS: StackNavigationOptions = {
  presentation: 'modal',
  headerTitle: '',
};

export const TRANSFER_STATUS_SCREEN_OPTION: StackNavigationOptions = {
  presentation: 'modal',
  headerShown: false,
};
