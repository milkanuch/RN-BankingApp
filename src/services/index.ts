import { Config } from 'react-native-config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  UserLoginParams,
  UserParams,
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
  }),
});

export const { useUserRegisterMutation, useUserLoginMutation } = bankApi;
