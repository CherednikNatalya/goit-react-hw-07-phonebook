import { useState } from 'react';
import { nanoid } from 'nanoid'
import css from './Form.module.css';
// import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import {addContact} from '../../redux/slice'
// import {getContacts} from '../../redux/reducer'
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export const Form =() => {

 const [name, setName] = useState('')
 const [number, setNumber] = useState('')

 const dispatch = useDispatch();
const contacts = useSelector(state => state.contacts.contacts);

  const nameId = nanoid()
  const numberId = nanoid()

  const handleChangeInfo = evt => {
    const {name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
        
        case 'number':
        setNumber(value);
        break;
        default:
          return;
    }
  };
 
     const handleSubmit = event => {
        event.preventDefault()
        const data = {
          id: nanoid(),
          name,
          number,
        };
        const newName = contacts.find(
          el => el.name.toLowerCase() === name.toLowerCase()
        );
        if (newName) {
          Notify.failure(`${name} is already in contacts !`);
          return
        } else {
          dispatch(addContact(data));
        }
        
        setName('')
        setNumber('')
    }

        return(
<form className={css.formStyle} onSubmit={handleSubmit}>
    <h2 className={css.title}>Phonebook</h2>
    <div >
          <label htmlFor={nameId} className={css.labelStyle}>
            <p className={css.text}>Name</p>
          </label>
        <input
        className={css.inputStyle}
        id={nameId}
  type="text"
  name="name"
  value={name}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={handleChangeInfo}
/>
</div>

<div >
          <label htmlFor={numberId} className={css.labelStyle}>
            <p className={css.text}>Number</p>
          </label>
        <input
         className={css.inputStyle}
        id={numberId}
        type="tel"
  value={number}
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  onChange={handleChangeInfo}
/>
</div>

<button className={css.addButton} type="submit" >
          Add contact
        </button>
</form>
        )
    }



// Form.propTypes = {
//   onSubmitForm: PropTypes.func.isRequired,
// }




