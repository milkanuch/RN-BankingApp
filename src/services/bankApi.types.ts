import { User } from './../store/user/user.types';

export interface UserParams
  extends Omit<User, 'isPremium' | 'isLogged' | 'isLoading'> {
  password: string;
}
