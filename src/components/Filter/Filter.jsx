import { nanoid } from 'nanoid';
import { Field } from './Filter.styled';
import { setFilter } from 'redux/contactsReducer';
import { useSelector, useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  const inputIdGenerate = nanoid();
  const filter = useSelector(state => state.contacts.filter);

  return (
    <>
      <label htmlFor={inputIdGenerate}>Find contacts by name</label>
      <Field
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        id={inputIdGenerate}
      />
    </>
  );
};
