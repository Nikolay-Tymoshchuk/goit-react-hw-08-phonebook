import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },

    removeContact: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, setFilter } = contactsSlice.actions;

// =====================BACKUP VARIANT=======================

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
