import {Form} from './Form/Form'
import ContactsList from './User/ContactsList'
import {FilterByName} from './FilterByName/FilterByName'


  export const App =() => {
 
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
        
   









  