import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { Icon, ContactItem, DeleteButton, ButtonsBox } from './Contact.styled';
import { toast } from 'react-toastify';
import { Ring } from '@uiball/loaders';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';

export const Contact = ({ options: { id, name, phone } }) => {
  const [deleteContact, { isLoading, error }] = useDeleteContactMutation();

  return (
    <ContactItem>
      <Icon />
      <span>{name}:</span>
      <span>{phone}</span>
      <ButtonsBox>
        {!isLoading && (
          <DeleteButton
            type="button"
            disabled={isLoading}
            onClick={() => deleteContact(id)}
          >
            Delete
          </DeleteButton>
        )}
        {isLoading && (
          <Ring size={26} lineWeight={5} speed={2} color="#899194" />
        )}
      </ButtonsBox>
    </ContactItem>
  );
};

Contact.propTypes = {
  options: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
