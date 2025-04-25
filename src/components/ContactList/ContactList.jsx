import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.item}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
