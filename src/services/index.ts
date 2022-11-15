import { Config } from 'react-native-config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {
  AllCardsResponseParams,
  NewCardParams,
  NewCardResponseParams,
  TransactionParams,
  TransactionResponseParams,
  UserLoginParams,
  UserParams,
  UserRefreshParams,
  UserResponseParams,
} from './bankApi.types';

export const bankApi = createApi({
  reducerPath: 'bankApi',
  tagTypes: ['Cards'],
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
      query: ({ accessToken, currency, provider, type }) => ({
        url: '/user/newcard',
        method: 'POST',
        body: { currency, provider, type },
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
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
    transaction: builder.mutation<TransactionResponseParams, TransactionParams>(
      {
        query: ({
          accessToken,
          senderCardNumber,
          receiverCardNumber,
          receiverName,
          sum,
          purpose,
        }) => ({
          url: '/user/transactions/new',
          method: 'POST',
          body: {
            senderCardNumber,
            receiverCardNumber,
            receiverName,
            sum,
            purpose,
          },
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        }),
        invalidatesTags: ['Cards'],
      },
    ),
    getAllCards: builder.query<AllCardsResponseParams, String>({
      query: accessToken => {
        return {
          url: '/user/cards/',
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        };
      },
      providesTags: result =>
        result
          ? [
              ...result.ok.map(({ cardNumber }) => ({
                type: 'Cards' as const,
                cardNumber,
              })),
              { type: 'Cards', id: 'LIST' },
            ]
          : [{ type: 'Cards', id: 'LIST' }],
    }),
  }),
});

export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useNewCardMutation,
  useTransactionMutation,
  useGetAllCardsQuery,
} = bankApi;
