import { Contact } from '../Contact';
import styles from './index.module.scss';
import { useFilteredContacts } from 'hooks/useFilteredContacts';

export default function ContactsList() {
  const { contacts, filteredContacts } = useFilteredContacts();

  return (
    <>
      {contacts && (
        <ul className={styles.list}>
          {filteredContacts.map(contact => (
            <Contact key={contact.id} options={contact} />
          ))}
        </ul>
      )}
    </>
  );
}
