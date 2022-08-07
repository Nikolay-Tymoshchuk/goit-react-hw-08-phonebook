import { Contact } from '../Contact';
import { List } from './ContactList.styled';
import { useFilteredContacts } from 'hooks/useFilteredContacts';

export const ContactList = () => {
  const { contacts, filteredContacts } = useFilteredContacts();

  return (
    <>
      {contacts && (
        <List>
          {filteredContacts.map(contact => (
            <Contact key={contact.id} options={contact} />
          ))}
        </List>
      )}
    </>
  );
};
