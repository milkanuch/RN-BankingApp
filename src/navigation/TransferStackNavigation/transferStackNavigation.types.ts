import { StackScreenProps } from '@react-navigation/stack';

export enum TransferStackScreenTypes {
  Transfer = 'Transfer',
  TransferStatus = 'TransferStatus',
}

export type TransferStackParamsList = {
  [TransferStackScreenTypes.Transfer]: undefined;
  [TransferStackScreenTypes.TransferStatus]: ITransactionStatusScreenPorps;
};

export interface ITransactionStatusScreenPorps {
  isSuccess: boolean;
  message?: string;
}

export type TransferStatusScreenProps = StackScreenProps<
  TransferStackParamsList,
  TransferStackScreenTypes.TransferStatus
>;

export type TransferScreenProps = StackScreenProps<
  TransferStackParamsList,
  TransferStackScreenTypes.Transfer
>;
