import { User } from './../store/user/user.types';

export interface UserParams
  extends Omit<User, 'isPremium' | 'isLogged' | 'isLoading'> {
  password: string;
}

export interface UserLoginParams {
  ipn?: string;
  phoneNumber?: string;
  password: string;
}

export interface UserResponseParams {
  access_token: string;
  refresh_token: string;
  error: string | null | undefined;
}

export interface NewCardResponseParams {
  cardNumber: string;
  error: string | null | undefined;
}

export interface NewCardParams {
  provider: string;
  type: string;
  currency: string;
  accessToken?: string;
}

export interface CardResponseParams {
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

export interface AllCardsResponseParams {
  ok: CardResponseParams[];
}

export interface UserRefreshParams {
  refresh_token: string;
}

export interface TransactionParams {
  accessToken?: string;
  senderCardNumber: string;
  receiverCardNumber: string;
  receiverName: string;
  sum: number;
  purpose: string;
}

export interface TransactionResponseParams {
  message?: string;
  error?: string;
}
