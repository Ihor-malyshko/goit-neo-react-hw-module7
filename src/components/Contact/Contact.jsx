import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.item}>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
