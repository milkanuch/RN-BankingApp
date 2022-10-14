import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from '..';

import { UserState } from './user.types';

const initialState: UserState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  isPremium: false,
  isLogged: false,
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserIsLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
    },
  },
});

export const selectIsLogged = (state: AppState) => state.user.isLogged;

export const { setUserIsLogged } = userSlice.actions;

export const { reducer: userReducer } = userSlice;
