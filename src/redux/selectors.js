import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.contacts.filter
export const selectContacts = state => state.contacts.contacts
export const selectIsLoading=state => state.contacts.isLoading
export const  selectError=state => state.contacts.error

export const selectFilterContacts = createSelector([selectContacts, selectFilter ],
    (contacts,filter )=>
 contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
)
)




