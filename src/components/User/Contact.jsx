import { PropTypes } from 'prop-types';
import css from './Contact.module.css';
import { useDispatch } from "react-redux";

import {deleteContact} from 'redux/action'
export const Contact = ({ id, name, number }) => {
  
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
   <li className={css.listItem}>
      <p className={css.title}>
        {name}: {number}
      </p>
      <button className={css.addButton} type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  
  );
};

Contact.propTypes ={
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
}

