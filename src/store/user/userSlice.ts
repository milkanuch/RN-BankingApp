import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { bankApi } from 'services/index';

import { AppState } from 'store/index';

import { UserState } from './user.types';
import { deleteUserTokens, setUsersTokens } from './userSlice.utils';

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
        setUsersTokens(
          payload.access_token,
          payload.refresh_token,
          payload.access_expire_date,
          payload.refresh_expire_date,
        );
      },
    );
    builder.addMatcher(
      bankApi.endpoints.userRegister.matchFulfilled,
      (_, { payload }) => {
        setUsersTokens(
          payload.access_token,
          payload.refresh_token,
          payload.access_expire_date,
          payload.refresh_expire_date,
        );
      },
    );
    builder.addMatcher(
      bankApi.endpoints.userRefresh.matchFulfilled,
      (_, { payload }) => {
        setUsersTokens(
          payload.access_token,
          payload.refresh_token,
          payload.access_expire_date,
          payload.refresh_expire_date,
        );
      },
    );
    builder.addMatcher(bankApi.endpoints.userLogout.matchPending, () => {
      deleteUserTokens();
    });
  },
});

export const selectIsLogged = (state: AppState) => state.user.isLogged;

export const { setUserIsLogged, setIsLoading } = userSlice.actions;

export const { reducer: userReducer } = userSlice;
