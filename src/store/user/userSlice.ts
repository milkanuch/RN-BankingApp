import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from '..';

import { setItem } from '../bankStore/store';

import { bankApi } from './../../services/index';

import { UserState } from './user.types';

const initialState: UserState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  ipn: '',
  passportNumber: '',
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
      (state, { payload }) => {
        setItem('Token', payload.access_token);
      },
    );
  },
});

export const selectIsLogged = (state: AppState) => state.user.isLogged;

export const { setUserIsLogged, setIsLoading } = userSlice.actions;

export const { reducer: userReducer } = userSlice;
