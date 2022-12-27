export interface ITransactionsDetailInfoProps {
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
