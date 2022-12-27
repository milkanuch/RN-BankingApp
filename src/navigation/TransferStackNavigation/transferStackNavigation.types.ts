import { StackScreenProps } from '@react-navigation/stack';

import { ITransactionStatusScreenProps } from 'screens/TransactionStatusScreen/transactionStatusScreen.types';

export enum TransferStackScreenTypes {
  Transfer = 'Transfer',
  TransactionStatus = 'TransactionStatus',
}

export type TransferStackParamsList = {
  [TransferStackScreenTypes.Transfer]: undefined;
  [TransferStackScreenTypes.TransactionStatus]: ITransactionStatusScreenProps;
};

export type TransferScreenProps = StackScreenProps<
  TransferStackParamsList,
  TransferStackScreenTypes.Transfer
>;
