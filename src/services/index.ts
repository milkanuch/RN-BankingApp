import { Config } from 'react-native-config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  NewCardParams,
  NewCardResponseParams,
  UserLoginParams,
  UserParams,
  UserRefreshParams,
  UserResponseParams,
} from './bankApi.types';

export const bankApi = createApi({
  reducerPath: 'bankApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.API_URL,
  }),
  endpoints: builder => ({
    userRegister: builder.mutation<UserResponseParams, UserParams>({
      query: body => ({
        url: '/register',
        method: 'POST',
        body: body,
        headers: {
          'Content-type': 'application/json',
        },
      }),
    }),
    userLogin: builder.mutation<UserResponseParams, UserLoginParams>({
      query: body => ({
        url: '/login',
        method: 'POST',
        body: body,
        headers: {
          'Content-type': 'application/json',
        },
      }),
    }),
    newCard: builder.mutation<NewCardResponseParams, NewCardParams>({
      query: body => ({
        url: '/user/newcard',
        method: 'POST',
        body: body,
        headers: {
          'Content-type': 'application/json',
        },
      }),
    }),
    userRefresh: builder.query<UserResponseParams, UserRefreshParams>({
      query: body => ({
        url: '/refresh_token',
        method: 'POST',
        body: body,
        headers: {
          'Content-type': 'application/json',
        },
      }),
    }),
    userLogout: builder.query<UserResponseParams, UserRefreshParams>({
      query: body => ({
        url: '/refresh_token/logout',
        method: 'POST',
        body: body,
        headers: {
          'Content-type': 'application/json',
          Authorization: 'Bearer',
        },
      }),
    }),
  }),
});

export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useNewCardMutation,
} = bankApi;
