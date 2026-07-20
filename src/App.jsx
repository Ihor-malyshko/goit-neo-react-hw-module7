import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { isApiConfigured } from './config/api';
import { fetchContacts } from './redux/contactsOps';
import { selectError, selectLoading } from './redux/contactsSlice';
import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const apiConfigured = isApiConfigured();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      {!apiConfigured && (
        <div className={css.setup}>
          <p>
            Create a <code>/contacts</code> resource on{' '}
            <a href="https://mockapi.io/" target="_blank" rel="noreferrer">
              mockapi.io
            </a>{' '}
            with fields <code>name</code> and <code>number</code>, then set
            <code>VITE_API_BASE_URL</code> in <code>.env</code> and on Vercel.
          </p>
        </div>
      )}
      <ContactForm />
      {loading && <p>Loading contacts...</p>}
      {error && <p className={css.error}>Error: {error}</p>}
      <Filter />
      <ContactList />
    </div>
  );
}
