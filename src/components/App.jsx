import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import toastOptions from 'helpers/toastOptions';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout';
import * as lazyRoutes from '../helpers/lazyRoutes';
import PrivateRoute from 'helpers/PrivateRoute';
import RestrictedRoute from 'helpers/RestrictedRoute';

const {
  ContactsBook,
  AddContactsForm,
  AuthorizationForm,
  RegistrationForm,
  Home,
  ErrorPlug,
} = lazyRoutes;

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactsBook />}>
              <Route path="add" element={<AddContactsForm />} />
            </Route>
          </Route>
          <Route element={<RestrictedRoute />}>
            <Route path="/register" element={<RegistrationForm />} />
          </Route>
          <Route element={<RestrictedRoute />}>
            <Route path="/login" element={<AuthorizationForm />} />
          </Route>
          <Route path="*" element={<ErrorPlug />} />
        </Route>
      </Routes>
      <ToastContainer {...toastOptions} />
    </>
  );
}
