import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, { payload: { user, token } }) => {
      state.user.name = user.name;
      state.user.email = user.email;
      state.token = token;
      state.isLoggedIn = true;
    },
    signOut: state => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = false;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

export const getUserName = state => state.auth.user.name;
// export const getIsLoggedIn = state => state.auth.isLoggedIn;
