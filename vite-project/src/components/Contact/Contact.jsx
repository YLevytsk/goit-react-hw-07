import css from './Contact.module.css';
import { FaUser, FaPhone } from 'react-icons/fa';

export default function Contact({ contact, onDelete }) {
  return (
    <div className={css.card}>
      <div className={css.info}>
        <div className={css.line}>
          <FaUser className={css.icon} />
          <span>{contact.name}</span>
        </div>
        <div className={css.line}>
          <FaPhone className={css.icon} />
          <span>{contact.number}</span>
        </div>
      </div>
      <button className={css.btn} onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
}
