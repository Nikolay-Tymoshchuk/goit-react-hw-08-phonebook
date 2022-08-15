import { Ring } from '@uiball/loaders';
import { useContactActions } from 'hooks/useContactActions';
import { IoMdContact } from 'react-icons/io';
import { CgCloseO } from 'react-icons/cg';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

export const Contact = ({ options: { id, name, number } }) => {
  const { handleDelete, isLoading } = useContactActions(id, name);

  return (
    <li className={styles.item}>
      <IoMdContact className={styles.icon} />
      <span>{name}:</span>
      <span>{number}</span>
      <div className={styles.buttonsBox}>
        {!isLoading && (
          <CgCloseO
            className={styles.close}
            type="button"
            disabled={isLoading}
            onClick={handleDelete}
          >
            Delete
          </CgCloseO>
        )}
        {isLoading && (
          <Ring size={26} lineWeight={5} speed={2} color="#899194" />
        )}
      </div>
    </li>
  );
};

Contact.propTypes = {
  options: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
