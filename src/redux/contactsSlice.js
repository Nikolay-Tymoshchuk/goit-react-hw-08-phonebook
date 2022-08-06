import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62ecdddd818ab252b6043253.mockapi.io',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      transformResponse: (response, meta, arg) => response.data,
      providesTags: (result, error, id) => [{ type: 'Contacts', id }],
    }),
    addContact: builder.mutation({
      query: contact => ({
        url: `/contacts`,
        method: 'POST',
        data: contact,
      }),
      transformResponse: (response, meta, arg) => response.data,
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      transformResponse: (response, meta, arg) => response.data,
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;

// import { createSlice } from '@reduxjs/toolkit';

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     filter: '',
//   },
//   reducers: {
//     addContact: (state, { payload }) => {
//       state.items.push(payload);
//     },

//     removeContact: (state, { payload }) => {
//       state.items = state.items.filter(({ id }) => id !== payload);
//     },

//     setFilter: (state, { payload }) => {
//       state.filter = payload;
//     },
//   },
// });

// export const { addContact, removeContact, setFilter } = contactsSlice.actions;

// SELECTORS

// export const getFilter = state => state.contacts.filter;
// export const getContacts = state => state.contacts.items;

// =====================BACKUP VERSION=======================

// import { addContact, removeContact, setFilter } from './contactsActions';

// const initialState = {
//   items: [],
//   filter: '',
// };

// const contactsReducer = createReducer(initialState, {
//   [addContact]: (state, action) => {
//     state.items.push(action.payload);
//   },
//   [removeContact]: (state, action) => {
//     state.items = state.items.filter(({ id }) => id !== action.payload);
//   },
//   [setFilter]: (state, action) => {
//     state.filter = action.payload;
//   },
// });

// export default contactsReducer;
