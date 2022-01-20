import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  sendMessageIsOpen: false,
  // piece of state that will have the email contents pushed through to the back
  selectedMail: null,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,

  // The `reducers` field lets us define reducers and generate associated actions
  // Reducers have functions which allow us to manipulate the state.
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    selectMail: (state, action) => {
      // the selectedMail becomes whatever you passed inside the payload when the action is fired off
      state.selectedMail = action.payload;
    },
  },
});

export const {openSendMessage, closeSendMessage, selectMail} = mailSlice.actions;

// selectors - allows us to pull the mail from memo
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;

// We gonna have openSendMessage and closeSendMessage. When I click compose it's gonna openSendMessage, it's gonna change a piece of state in the data layer so that it's true and when I close it, it triggers to false
// We render it based on that value (sendMessageIsOpen is false by default)
// If we call the openSendMessage action change the initialState to true

// Every time we push a user into the data layer we need to do it for an action i.e setting the sendMessageIsOpen is property which is inside the data layer - in order to do it we have to dispatch the openSendMessage action which will set it to true

// Any time I wanna pull the value from the data layer I need to have a selector(select then variable name afterwards), state which is the data layer and then the slice that we are in which is mail (determined by name in mailSlice). If we use that selector we get the default initial value

// Map it to the state in store

// Use the PayloadAction type to declare the contents of `action.payload`
// incrementByAmount: (state, action) => {

// state.value += action.payload;
// },
