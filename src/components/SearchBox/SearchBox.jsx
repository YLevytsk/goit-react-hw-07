import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        className={styles.input}
        placeholder="Search contacts"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
      <button type="button" className={styles.button}>
        Search
      </button>
    </div>
  );
}






