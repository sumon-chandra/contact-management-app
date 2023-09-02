import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { Contact } from "../../../types";

const savedContacts: Contact[] = localStorage.getItem("CONTACTS") !== null ? JSON.parse(localStorage.getItem("CONTACTS")!) : [];
const initialState = savedContacts;

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
          deleteContact: (state, action: PayloadAction<string>) => {
               console.log(action.payload);
               const filteredState = (state = state.filter(contact => contact.id !== action.payload));

               localStorage.setItem("CONTACTS", JSON.stringify(filteredState.map(contact => contact)));
               return filteredState;
          },
     },
});

export const { addNewContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
