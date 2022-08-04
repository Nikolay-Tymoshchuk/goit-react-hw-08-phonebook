import { useEffect, useRef } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Title } from './App.styled';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, removeContact, setFilter } from 'redux/contactsActions';

export function App() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  console.log('contacts :>> ', contacts);
  console.log('filter :>> ', filter);
  console.log('addContact() :>> ', addContact());
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');
  // const isFirstLoad = useRef(true);

  // useEffect(() => {
  //   if (isFirstLoad.current) {
  //     const contactsFromLocalStorage = localStorage.getItem('contacts');
  //     if (contactsFromLocalStorage) {
  //       setContacts(JSON.parse(contactsFromLocalStorage));
  //     }
  //     isFirstLoad.current = false;
  //     return;
  //   }
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const contactCreate = contact => {
    dispatch(addContact(contact));
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const removeContact = id => {
    dispatch(removeContact(id));
    // setContacts(contacts.filter(contact => contact.id !== id));
  };

  const normalizedContacts = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedContacts)
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={contactCreate} contacts={contacts} />
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        theme={'dark'}
      />
      <Title>Contacts</Title>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList data={filteredContacts} onClick={removeContact} />
    </Container>
  );
}
