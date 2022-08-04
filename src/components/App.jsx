import { ToastContainer } from 'react-toastify';
import { Container, Title } from './App.styled';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import toastOptions from 'helpers/toastOptions';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <ToastContainer {...toastOptions} />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
}
