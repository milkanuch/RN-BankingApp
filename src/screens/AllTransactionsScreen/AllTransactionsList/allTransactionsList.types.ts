import { IUserTransactionResponseParams } from './../../../services/bankApi.types';

export interface IAllTransactionListProps {
  transactions: IUserTransactionResponseParams[];
}
