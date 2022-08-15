import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import toastOptions from 'helpers/toastOptions';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout';
import * as lazyRoutes from '../helpers/lazyRoutes';
import PrivateRoute from 'helpers/PrivateRoute';
import PublicRoute from 'helpers/PublicRoute';

const {
  ContactsBook,
  AddContactsForm,
  AuthorizationForm,
  RegistrationForm,
  Home,
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
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegistrationForm />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<AuthorizationForm />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer {...toastOptions} />
    </>
  );
}
