import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, { payload }) => {
      state = payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const getFilter = state => state.filter;
