import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

import { BottomTabsTypeProps } from 'navigation/AppNavigation/appNavigation.types';

import { ITransactionsDetailInfoProps } from 'screens/AllTransactionsScreen/TransactionDetailInfo/transactionDetailInfo.types';
import { ITransactionStatusScreenProps } from 'screens/TransactionStatusScreen/transactionStatusScreen.types';

export enum AppStackNavigationTypes {
  AppBottomTabNavigation = 'AppBottomTabNavigation',
  TransactionStatus = 'TransactionStatus',
  TransactionDetailInfo = 'TransactionsDetailInfo',
}

export type AppStackNavigationParamsList = {
  [AppStackNavigationTypes.AppBottomTabNavigation]: undefined;
  [AppStackNavigationTypes.TransactionStatus]: ITransactionStatusScreenProps;
  [AppStackNavigationTypes.TransactionDetailInfo]: ITransactionsDetailInfoProps;
};

export type TransactionStatusScreenProps = StackScreenProps<
  AppStackNavigationParamsList,
  AppStackNavigationTypes.TransactionStatus
>;

export type TransactionDetailScreenProps = StackScreenProps<
  AppStackNavigationParamsList,
  AppStackNavigationTypes.TransactionDetailInfo
>;

export type AllTransactionItemProps = CompositeNavigationProp<
  BottomTabsTypeProps,
  StackNavigationProp<AppStackNavigationParamsList>
>;
