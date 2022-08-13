import { ToastContainer } from 'react-toastify';
// import { ContactForm } from './ContactsForm';
import { ContactList } from './ContactsList';
import { Filter } from './Filter';
import { Route, Routes } from 'react-router-dom';
import toastOptions from 'helpers/toastOptions';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout';
import AuthForm from './AuthorizationForm';
import RegForm from './RegistrationForm';
import UserMenu from './UserMenu';
import * as lazyRoutes from '../helpers/lazyRoutes';

const { ContactsBook, AddContactsForm, AuthorizationForm, RegistrationForm } =
  lazyRoutes;

console.log('object :>> ', ContactsBook);
export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="contacts" element={<ContactsBook />}>
            <Route path="add" element={<AddContactsForm />} />
          </Route>
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<AuthorizationForm />} />
        </Route>
      </Routes>
      <ToastContainer {...toastOptions} />
      {/* <Title>Phonebook</Title>
          <Title>Contacts</Title> */}
      {/* <Filter />
      <ContactList /> */}
    </>
  );
}
