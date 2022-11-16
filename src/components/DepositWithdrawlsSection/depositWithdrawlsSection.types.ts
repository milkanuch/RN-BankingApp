import { IUserTransactionResponseParams } from '../../services/bankApi.types';

export interface IDepositWithdrawlsSectionProps {
  transactions: IUserTransactionResponseParams[];
}
