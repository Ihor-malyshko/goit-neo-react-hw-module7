import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { fetchContacts } from './redux/contactsOps';
import { selectError, selectLoading } from './redux/contactsSlice';
import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      {loading && <p>Loading contacts...</p>}
      {error && <p className={css.error}>Error: {error}</p>}
      <Filter />
      <ContactList />
    </div>
  );
}
