import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authAPI = createApi({
  baseQuery: fetchBaseQuery({
    // ==============================> Default settings

    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;
    //   if (token) {
    //     headers.set('Authorization', `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: builder => ({
    // ==============================> Get current user

    current: builder.query({
      query: () => ({ url: '/users/current' }),
    }),

    // ==============================> Sign up new user
    signup: builder.mutation({
      query: body => ({
        url: '/users/signup',
        method: 'POST',
        body,
      }),
    }),

    // ==============================> Sign in existing user
    login: builder.mutation({
      query: body => ({
        url: '/users/login',
        method: 'POST',
        body,
      }),
    }),

    // ==============================> Sign out current user
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
    }),
  }),
});

// ==============================> Hooks from API

export const {
  useCurrentQuery,
  useSignupMutation,
  useLoginMutation,
  useLogoutMutation,
} = authAPI;
