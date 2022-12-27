export interface IAllTransactionsItemProps {
  id: number;
  sum: number;
  time: Date;
  profit: boolean;
  provider: string;
  currency: string;
  category: string;
  senderCardNumber: string;
  receiverCardNumber: string;
  senderName: string;
  receiverName: string;
  purpose?: string;
}

export const TransactionsCategory: { [key: string]: string } = {
  ['Food']: 'food',
  ['Games']: 'gamepad-variant',
  ['Other']: 'folder-open',
  ['Transport']: 'car',
  ['Fuel']: 'fuel',
  ['Technique']: 'tablet-cellphone',
};
