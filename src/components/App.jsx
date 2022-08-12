import { ToastContainer } from 'react-toastify';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Route, Routes } from 'react-router-dom';
import toastOptions from 'helpers/toastOptions';
import 'react-toastify/dist/ReactToastify.css';
// import SharedLayout from './SharedLayout';
import AuthForm from './Authorization';
import RegForm from './Registration';

export function App() {
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <AuthForm />
      <RegForm />
      {/* <Routes>
        <Route path="/" element={<SharedLayout />} />
      </Routes> */}
      {/* <Title>Phonebook</Title>
          <ContactForm />
          <ToastContainer {...toastOptions} />
          <Title>Contacts</Title> */}
      {/* <Filter />
      <ContactList /> */}
    </div>
  );
}
