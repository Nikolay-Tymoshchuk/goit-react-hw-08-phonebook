import { configureStore } from '@reduxjs/toolkit';
import { contactsAPI } from 'services/contacts';
import { authAPI } from 'services/auth';
import { filterSlice } from './filterSlice';
import { authSlice } from './authSlice';

export const store = configureStore({
  reducer: {
    [authAPI.reducerPath]: authAPI.reducer,
    [contactsAPI.reducerPath]: contactsAPI.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsAPI.middleware,
    authAPI.middleware,
  ],
});
