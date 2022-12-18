export interface IAllTransactionsItemProps {
  category: string;
  time: Date;
  provider: string;
  sum: number;
  currency: string;
  profit: boolean;
}

export const TransactionsCategory: { [key: string]: string } = {
  ['Food']: 'food',
  ['Games']: 'gamepad-variant',
  ['Other']: 'folder-open',
  ['Transport']: 'car',
  ['Fuel']: 'fuel',
  ['Technique']: 'tablet-cellphone',
};
