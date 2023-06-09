import css from './FilterByName.module.css'
import {useDispatch, useSelector } from "react-redux";
import {contactsSearch} from "redux/slice";
import {selectFilter} from 'redux/selectors'


export const FilterByName = () => {
  const dispatch = useDispatch(); 
  const filter = useSelector(selectFilter);

	const changeFilter= data => {
    dispatch(contactsSearch(data));
};

  return (
    <>
    <label className={css.formStyle}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.inputStyle}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={e => changeFilter(e.target.value)}
      />
    </label>
    

  </>
  )
}