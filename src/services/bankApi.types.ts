import { IIncomeExpensesCardProps } from 'screens/IncomeExpensesScreen/IncomeExpensesCard/incomeExpensesCard.types';

export interface IUserParams {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  passportNumber: string;
  ipn: string;
}

export interface IUserLoginParams {
  ipn?: string;
  phoneNumber?: string;
  password: string;
}

export interface IUserInfoResponseParamas {
  firstName: string;
  lastName: string;
}

export interface IUserResponseParams {
  access_token: string;
  refresh_token: string;
  refresh_expire_date: string;
  access_expire_date: string;
  error: string | null | undefined;
}

export interface INewCardResponseParams {
  cardNumber: string;
  error: string | null | undefined;
}

export interface INewCardParams {
  provider: string;
  type: string;
  currency: string;
  accessToken?: string;
}

export interface ICardResponseParams {
  cardNumber: string;
  creationTime: Date;
  expirationTime: Date;
  cvvCode: string;
  pinCode: string;
  cardType: { id: number; name: string };
  currencyName: string;
  providerEntity: { id: number; providerName: string; code: string };
  sum: number;
  sumLimit: number;
  isBlocked: boolean;
}

export interface IAllCardsResponseParams {
  ok: ICardResponseParams[];
}

export interface IUserRefreshParams {
  refreshToken: string;
}

export interface ITransactionParams {
  category?: string;
  accessToken?: string;
  senderCardNumber: string;
  receiverCardNumber: string;
  receiverName: string;
  sum: number;
  purpose: string;
}

export interface ITransactionResponseParams {
  message?: string;
  error?: string;
}

export interface IUserTransactionResponseParams {
  id: number;
  provider: string;
  currency: string;
  time: Date;
  sum: number;
  profit: boolean;
}

export interface IIncomeExpensesResponseParams {
  month: string;
  sum: number;
  currency: string;
  year: string;
  categories: IIncomeExpensesCardProps[];
}
