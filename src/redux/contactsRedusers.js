import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, setFilter } from './contactsActions';

export const contactsReducer = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [removeContact]: (state, action) =>
});
