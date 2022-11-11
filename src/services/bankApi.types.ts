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
  jwt: string;
  error: string | null | undefined;
}
