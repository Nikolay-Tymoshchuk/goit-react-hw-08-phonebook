import { createReducer, createAction } from '@reduxjs/toolkit';
import { addContact, removeContact, setFilter } from './contactsActions';

// const initialState = {
//   items: [],
//   filter: '',
// };

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact: (state, action) => {
//       state.contacts.items.push(action.payload);
//     },

//     removeContact: (state, action) => {
//       state.contacts.items.splice(action.payload, 1);
//     },

//     setFilter: (state, action) => {
//       state.contacts.filter = action.payload.toLowerCase();
//     },
//   },
// });

// export const { addContact, removeContact, setFilter } = contactsSlice.actions;

// export default contactsSlice.reducer;

const initialState = {
  items: [],
  filter: '',
};

const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    console.log('action.payload :>> ', action.payload);
    state.items.push(action.payload);
  },
  [removeContact]: (state, action) => {
    state.items.filter(item => item.id !== action.payload.id);
  },
  [setFilter]: (state, action) => {
    state.filter = action.payload.toLowerCase();
  },
});

export default contactsReducer;
