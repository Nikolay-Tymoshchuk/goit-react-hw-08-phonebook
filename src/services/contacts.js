import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsAPI = createApi({
  reducerPath: 'contacts',
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
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({ url: '/contacts' }),
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Contacts', id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }],
    }),
    addContact: builder.mutation({
      query: body => ({
        url: `/contacts`,
        method: 'POST',
        body,
      }),
      transformResponse: response => response.data,
      invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      transformResponse: response => response.data,
      invalidatesTags: contact => [{ type: 'Contacts', id: contact?.id }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsAPI;
