import { Contact } from '../Contact';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterState = useSelector(state => state.contacts.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterState.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} options={contact} />
      ))}
    </List>
  );
};
