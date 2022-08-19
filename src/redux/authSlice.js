import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // ==============================> Set user data

    signIn: (state, { payload: { user, token } }) => {
      state.user.name = user.name;
      state.user.email = user.email;
      state.token = token;
      state.isLoggedIn = true;
    },

    // ==============================> Action when user log out

    signOut: state => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = false;
    },
  },
});

// ==============================> Actions

export const { signIn, signOut } = authSlice.actions;
