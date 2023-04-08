import css from './ContactsList.module.css';
import {useDispatch, useSelector } from "react-redux";
import {deleteContact} from 'redux/slice'
import { PropTypes } from "prop-types";

export default function ContactsList () {
  const contacts = useSelector(state => state.contacts.contacts.filter(contact => contact.name.toLowerCase().includes(state.contacts.filter)));
  const dispatch = useDispatch();
 
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

    return(
        <div className={css.formStyle}>
          
            <ul className={css.contactsList}>
      {contacts.map(({ id, name, number }) =>(
        <li className={css.listItem} key={id}>
          <p className={css.titleli}>
        {name}: {number}
      </p>
          <button
            className={css.addButton}
            type="button"
            onClick={() => onDeleteContact (id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
        </div>
    )
  }

  ContactsList.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		})
	),
};








 