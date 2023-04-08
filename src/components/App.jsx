import { useEffect} from 'react';

// import {Section} from './Section/Section'
import {Form} from './Form/Form'
import ContactsList from './User/ContactsList'
import {FilterByName} from './FilterByName/FilterByName'
import { useDispatch, useSelector } from "react-redux";

import {fetchContacts} from 'redux/operations'

  export const App =() => {
    const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts);
  //  const firstRender = useRef(true);

    //  useEffect (()=>{
    //   if (firstRender.current) {
    //     firstRender.current = false;
    //     return;
    //   }
    //   localStorage.setItem('contacts' , JSON.stringify(contacts))
    // },[contacts])
useEffect (()=>{
  dispatch(fetchContacts({search: filter}))},
  [dispatch,filter])

        return (
      <>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <FilterByName />
      <ContactsList/>    
  </>
    );
   
  }
        
   









  