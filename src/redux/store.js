import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { contactsAPI } from 'services/contacts';
import { authAPI } from 'services/auth';
import { filterSlice } from './filterSlice';
import { authSlice } from './authSlice';

const persistConfig = {
  key: 'auth',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    [authAPI.reducerPath]: authAPI.reducer,
    [contactsAPI.reducerPath]: contactsAPI.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [authSlice.name]: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authAPI.middleware, contactsAPI.middleware),
});

export const persistor = persistStore(store);
