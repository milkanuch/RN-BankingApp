export interface User {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  isPremium: boolean;
  isLogged: boolean;
  isLoading: boolean;
}

export interface UserState extends User {}
