import {createSlice} from '@reduxjs/toolkit'
// import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {fetchContacts, addContact, deleteContact} from 'redux/operations'


const handlePending = state => {
    state.isLoading = true;
  };
  
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };
  

export const contactsSlice = createSlice({
name: 'contacs',
initialState: {
	contacts: {
        items: [],
        isLoading: false,
        error: null
      },
      filter: ""
},

extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
    

    [contactsSearch.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [contactsSearch.rejected]: handleRejected,


  },
// reducers: {
//     addContact(state, action) {
//         const contact = {
//             id: nanoid(),
//             name: action.payload.name,
//             number: action.payload.number,
//         };

//         state.contacts.push(contact);
//     },
// deleteContact: (state, {payload}) => {
//     state.contacts = state.contacts.filter(
//         contact => contact.id !== payload
//       );
// },

// contactsSearch: (state, {payload}) => {
//     state.filter = payload.toLowerCase();
// }
// }
})

const persistConfig = {
    key: 'goit',
    storage,
    whitelist: ['contacts'],
  };
  export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

//   export const  {addContact, deleteContact, filterSearch , contactsSearch }= contactsSlice.actions;

  export default contactsSlice.reducer;


