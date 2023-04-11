import {createSlice} from '@reduxjs/toolkit'
import {fetchContacts, addContact, deleteContact} from 'redux/operations'

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

extraReducers: builder => {
  builder
  .addCase(fetchContacts.pending, state =>{state.isLoading = true;})
  .addCase(fetchContacts.fulfilled,(state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;})
    .addCase(addContact.pending, state =>{state.isLoading = true;})
  .addCase(addContact.fulfilled,(state, {payload}) => {
    state.isLoading = false;
    state.error = null;
    state.items.push(payload);
    })
    .addCase(addContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;})
    .addCase(deleteContact.pending, state =>{state.isLoading = true;})
  .addCase(deleteContact.fulfilled,(state, {payload}) => {
    state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === payload.id
      );
      state.items.splice(index, 1);
    })
    .addCase(deleteContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;})
   
},
reducers: {
  contactsSearch(state, { payload }) {
      state.filter = payload.toLowerCase();
  },
}})


export const contactsReducer = contactsSlice.reducer;
export const  {contactsSearch} = contactsSlice.actions;




