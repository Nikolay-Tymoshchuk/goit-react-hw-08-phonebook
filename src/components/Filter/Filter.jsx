import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Field } from './Filter.styled';
import { setFilter } from 'redux/contactsActions';
import { useSelector, useDispatch } from 'react-redux';
export const Filter = ({ value, onChange }) => {
  const inputIdGenerate = nanoid();
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  return (
    <>
      <label htmlFor={inputIdGenerate}>Find contacts by name</label>
      <Field
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
        id={inputIdGenerate}
      />
    </>
  );
};

const handleFilterChange = e => {
  setFilter(e.target.value);
};
