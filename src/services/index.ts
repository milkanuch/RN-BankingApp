import { Config } from 'react-native-config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getItem } from './../store/bankStore/store';

import {
  IAllCardsResponseParams,
  INewCardParams,
  INewCardResponseParams,
  ITransactionParams,
  ITransactionResponseParams,
  IUserInfoResponseParamas,
  IUserLoginParams,
  IUserParams,
  IUserRefreshParams,
  IUserResponseParams,
} from './bankApi.types';

const anonymousEndpoints = [
  'userLogin',
  'userRegister',
  'userRefresh',
  'userLogout',
];

export const bankApi = createApi({
  reducerPath: 'bankApi',
  tagTypes: ['Cards'],
  baseQuery: fetchBaseQuery({
    baseUrl: Config.API_URL,
    prepareHeaders: async (headers, { endpoint }) => {
      const token = await getItem('AccessToken');
      if (token && !anonymousEndpoints.includes(endpoint)) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    userRegister: builder.mutation<IUserResponseParams, IUserParams>({
      query: body => ({
        url: '/register',
        method: 'POST',
        body,
        headers: {
          'Content-type': 'application/json',
        },
      }),
    }),
    userLogin: builder.mutation<IUserResponseParams, IUserLoginParams>({
      query: body => ({
        url: '/login',
        method: 'POST',
        body,
        headers: {
          'Content-type': 'application/json',
        },
      }),
    }),
    userRefresh: builder.mutation<IUserResponseParams, IUserRefreshParams>({
      query: body => ({
        url: '/refresh_token',
        method: 'POST',
        body,
        headers: {
          'Content-type': 'application/json',
        },
      }),
    }),
    userInfo: builder.query<IUserInfoResponseParamas, void>({
      query: () => ({
        url: '/user/info',
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      }),
    }),
    userLogout: builder.mutation<IUserResponseParams, IUserRefreshParams>({
      query: body => ({
        url: '/refresh_token/logout',
        method: 'POST',
        body,
        headers: {
          'Content-type': 'application/json',
        },
      }),
    }),
    newCard: builder.mutation<INewCardResponseParams, INewCardParams>({
      query: ({ currency, provider, type }) => ({
        url: '/user/cards/new',
        method: 'POST',
        body: { currency, provider, type },
        headers: {
          'Content-type': 'application/json',
        },
      }),
    }),
    transaction: builder.mutation<
      ITransactionResponseParams,
      ITransactionParams
    >({
      query: ({
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
        },
      }),
      invalidatesTags: ['Cards'],
    }),
    getAllCards: builder.query<IAllCardsResponseParams, void>({
      query: () => {
        return {
          url: '/user/cards/',
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
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
  useUserInfoQuery,
  useUserRefreshMutation,
  useUserLogoutMutation,
  useNewCardMutation,
  useTransactionMutation,
  useGetAllCardsQuery,
} = bankApi;
