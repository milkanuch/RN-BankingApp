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
}
