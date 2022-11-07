import { Config } from 'react-native-config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { UserParams } from './bankApi.types';

export const bankApi = createApi({
  reducerPath: 'bankApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.API_URL,
  }),
  endpoints: builder => ({
    userRegister: builder.query<{ jwt: string }, UserParams>({
      query: ({ firstName, lastName, phoneNumber, password }) => ({
        url: '/register',
        method: 'POST',
        body: { firstName, lastName, phoneNumber, password },
        headers: {
          'Content-type': 'application/json',
        },
      }),
    }),
    userLogin: builder.query<
      { jwt: string },
      Pick<UserParams, 'phoneNumber' | 'password'>
    >({
      query: ({ phoneNumber, password }) => ({
        url: '/login',
        method: 'POST',
        body: { phoneNumber, password },
        headers: {
          'Content-type': 'application/json',
        },
      }),
    }),
  }),
});

export const { useUserRegisterQuery, useUserLoginQuery } = bankApi;
