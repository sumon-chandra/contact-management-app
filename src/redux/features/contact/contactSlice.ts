import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { Contact } from "../../../types";

const savedContacts: Contact[] = localStorage.getItem("CONTACTS") !== null ? JSON.parse(localStorage.getItem("CONTACTS")!) : [];
const initialState: Contact[] = savedContacts;

export const contactSlice = createSlice({
     name: "contact",
     initialState,
     reducers: {
          addNewContact: (state, action: PayloadAction<Contact>) => {
               const userInfo = {
                    ...action.payload,
                    id: nanoid(),
               };
               state.push(userInfo);

               localStorage.setItem("CONTACTS", JSON.stringify(state.map(contact => contact)));
          },
     },
});

export const { addNewContact } = contactSlice.actions;
export default contactSlice.reducer;
