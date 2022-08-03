import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },

    removeContact: (state, action) => {
      state.contacts.items.splice(action.payload, 1);
    },

    setFilter: (state, action) => {
      state.contacts.filter = action.payload.toLowerCase();
    },
  },
});

export const { addContact, removeContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
