// import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.contacts.filter
export const selectContacts = state => state.contacts.items
console.log(selectContacts);
export const selectIsLoading=state => state.contacts.isLoading
export const  selectError=state => state.contacts.error

// export const selectFilterContacts = createSelector([selectContacts, selectFilter ],
//     (contacts,filter)=>{ 
//         console.log(contacts);
//         return selectContacts?.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase()))}
 
// )

export const selectFilterContacts = state =>{
    const contacts = selectContacts(state)
    const filter = selectFilter(state)
    return contacts?.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()))
}




