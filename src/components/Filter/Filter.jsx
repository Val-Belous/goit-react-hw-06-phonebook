import { useDispatch, useSelector } from 'react-redux';
import styles from '../Form/Form.module.css';
import { filterContact } from '../../Redux/Contacts/contacts-slice';

export const Filter = () => {
  const name = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handlerInput = evt => {
    dispatch(filterContact(evt.target.value));
  };

  return (
    <form className={styles.form}>
      <label className={styles.label}>
        Find Contacts by name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={handlerInput}
        />
      </label>
    </form>
  );
};
