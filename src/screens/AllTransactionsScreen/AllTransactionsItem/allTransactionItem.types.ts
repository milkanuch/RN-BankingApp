export interface IAllTransactionsItemProps {
  category?: string;
  time: Date;
  provider: string;
  sum: number;
  currency: string;
  profit: boolean;
}

export enum TransactionsCategory {
  Food = 'food',
}
