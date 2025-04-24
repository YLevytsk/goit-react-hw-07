import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../redux/contactsOps';

import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from '../redux/contactsSlice';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';

import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>

      <ContactForm onAdd={handleAddContact} />
      <SearchBox />

      {loading && <p>Loading contacts...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <ContactList contacts={contacts} onDelete={handleDeleteContact} />
    </div>
  );
}


