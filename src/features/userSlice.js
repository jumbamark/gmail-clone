import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  // user is null by default
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  // The `reducers` field lets us define reducers and generate associated actions
  // Reducers have functions which allow us to manipulate the state.
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const {login, logout} = userSlice.actions;

// selectors - allows us to pull the user from memo
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;

// connect this slice in store.js
