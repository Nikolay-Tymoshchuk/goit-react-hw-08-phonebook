import PropTypes from 'prop-types';
import { removeContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { Icon, ContactItem, DeleteButton } from './Contact.styled';

export const Contact = ({ options: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <Icon />
      <span>{name}:</span>
      <span>{number}</span>
      <DeleteButton type="button" onClick={() => dispatch(removeContact(id))}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  options: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
