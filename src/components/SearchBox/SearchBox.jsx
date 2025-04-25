import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <label>
      Search
      <input
        type="text"
        placeholder="Search contacts"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
}




