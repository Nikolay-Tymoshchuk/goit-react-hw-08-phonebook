import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    current: builder.query({
      query: () => ({ url: '/users/current' }),
    }),
    signup: builder.mutation({
      query: body => ({
        url: '/users/signup',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation({
      query: body => ({
        url: '/users/login',
        method: 'POST',
        body,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useCurrentQuery,
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation,
} = authAPI;
