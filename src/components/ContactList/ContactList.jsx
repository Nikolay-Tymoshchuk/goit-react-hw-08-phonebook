import { Contact } from '../Contact';
import { List } from './ContactList.styled';
import { getFilter, getContacts } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} options={contact} />
      ))}
    </List>
  );
};
