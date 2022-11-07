import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import { bankApi } from './../services/index';

import { userReducer } from './user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [bankApi.reducerPath]: bankApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(bankApi.middleware),
});

setupListeners(store.dispatch);

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
