import PropTypes from 'prop-types';
import { Icon, ContactItem, DeleteButton, ButtonsBox } from './Contact.styled';
import { Ring } from '@uiball/loaders';
import { useContactActions } from 'hooks/useContactActions';

export const Contact = ({ options: { id, name, phone } }) => {
  const { handleDelete, isLoading } = useContactActions(id, name);

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
            onClick={handleDelete}
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
