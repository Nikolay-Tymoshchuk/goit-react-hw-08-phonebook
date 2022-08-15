import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import styles from './index.module.scss';

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
