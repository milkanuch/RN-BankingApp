import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from '..';

import { deleteItem, setItem } from '../bankStore/store';

import { bankApi } from './../../services/index';

import { UserState } from './user.types';

const initialState: UserState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  isPremium: false,
  isLogged: false,
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserIsLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      bankApi.endpoints.userLogin.matchFulfilled,
      (_, { payload }) => {
        setItem('AccessToken', payload.access_token);
        setItem('RefreshToken', payload.refresh_token);
        setItem('AccessExpireDate', payload.access_expire_date);
        setItem('RefreshExpireDate', payload.refresh_expire_date);
      },
    );
    builder.addMatcher(
      bankApi.endpoints.userRefresh.matchFulfilled,
      (_, { payload }) => {
        setItem('AccessToken', payload.access_token);
        setItem('RefreshToken', payload.refresh_token);
        setItem('AccessExpireDate', payload.access_expire_date);
        setItem('RefreshExpireDate', payload.refresh_expire_date);
      },
    );
    builder.addMatcher(bankApi.endpoints.userLogout.matchPending, () => {
      deleteItem('AccessToken');
      deleteItem('RefreshToken');
      deleteItem('AccessExpireDate');
      deleteItem('RefreshExpireDate');
    });
  },
});

export const selectIsLogged = (state: AppState) => state.user.isLogged;

export const { setUserIsLogged, setIsLoading } = userSlice.actions;

export const { reducer: userReducer } = userSlice;
