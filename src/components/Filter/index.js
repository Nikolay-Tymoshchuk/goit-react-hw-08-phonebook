import { nanoid } from 'nanoid';
import styles from './index.module.scss';
import { setFilter, getFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const inputIdGenerate = nanoid();

  return (
    <>
      <label className={styles.label} htmlFor={inputIdGenerate}>
        Find contacts by name
      </label>
      <input
        className={styles.input}
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        id={inputIdGenerate}
      />
    </>
  );
};
