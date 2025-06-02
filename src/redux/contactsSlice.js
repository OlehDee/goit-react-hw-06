import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload
        );
      },
      prepare(id) {
        return {
          payload: id,
        };
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
