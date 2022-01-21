import {configureStore} from "@reduxjs/toolkit";
import mailReducer from "../features/mailSlice";
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});

// Change the counter to mail bec it should be the mail slice
// This is where we essentially go and map it to the state
// The reducer is that data layer then we map it here (we got the mailReducer which manages the mailSlice then we have the mail-where we map it to)
