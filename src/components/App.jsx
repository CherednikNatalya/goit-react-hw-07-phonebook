import { useEffect,  useRef } from 'react';

// import {Section} from './Section/Section'
import {Form} from './Form/Form'
import ContactsList from './User/ContactsList'
import {FilterByName} from './FilterByName/FilterByName'
import { useSelector } from "react-redux";


  export const App =() => {
  
    const contacts = useSelector(state => state.contacts);
   const firstRender = useRef(true);

     useEffect (()=>{
      if (firstRender.current) {
        firstRender.current = false;
        return;
      }
      localStorage.setItem('contacts' , JSON.stringify(contacts))
    },[contacts])


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
        
   









  