import { deleteItem, setItem } from '../bankStore/store';

export const setUsersTokens = (
  accessToken: string,
  refreshToken: string,
  accessExpireDate: string,
  refreshExpireDate: string,
) => {
  setItem('AccessToken', accessToken);
  setItem('RefreshToken', refreshToken);
  setItem('AccessExpireDate', accessExpireDate);
  setItem('RefreshExpireDate', refreshExpireDate);
};

export const deleteUserTokens = () => {
  deleteItem('AccessToken');
  deleteItem('RefreshToken');
  deleteItem('AccessExpireDate');
  deleteItem('RefreshExpireDate');
};
