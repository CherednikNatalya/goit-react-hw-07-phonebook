import {createSlice} from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
name: 'contacs',
initialState: {
	contacts: [
		{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
		{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
		{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
		{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
	],
    filter:'',
},
reducers: {
    addContact(state, action) {
        const contact = {
            id: nanoid(),
            name: action.payload.name,
            number: action.payload.number,
        };

        state.contacts.push(contact);
    },
deleteContact: (state, {payload}) => {
    // const index = state.findIndex(contact=> contact.id === payload);
    // state.splice(index, 1);
    state.contacts = state.contacts.filter(
        contact => contact.id !== payload
      );
},

contactsSearch: (state, {payload}) => {
    state.filter = payload.toLowerCase();
}
}
})

const persistConfig = {
    key: 'goit',
    storage,
    whitelist: ['contacts'],
  };
  export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

  export const  {addContact, deleteContact, filterSearch , contactsSearch }= contactsSlice.actions;

  export default contactsSlice.reducer;


