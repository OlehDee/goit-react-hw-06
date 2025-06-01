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
      prepare(item) {
        return {
          payload: {
            item,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      },
      prepare(id) {
        return {
          payload: {
            id,
          },
        };
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;