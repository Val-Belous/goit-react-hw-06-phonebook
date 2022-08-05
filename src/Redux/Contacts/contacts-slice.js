import { createSlice } from '@reduxjs/toolkit';
// =================================================

const initialState = { contacts: [] };

const contactManager = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactManager.actions;

export default contactManager.reducer;
