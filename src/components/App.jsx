import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import toastOptions from 'helpers/toastOptions';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './Layout';
import * as lazyRoutes from '../helpers/lazyRoutes';
import PrivateRoute from 'helpers/PrivateRoute';
import PublicRoute from 'helpers/PublicRoute';

const { ContactsBook, AddContactsForm, AuthorizationForm, RegistrationForm } =
  lazyRoutes;

console.log('object :>> ', ContactsBook);
export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactsBook />}>
              <Route path="add" element={<AddContactsForm />} />
            </Route>
          </Route>
          <Route element={<PublicRoute restricted />}>
            <Route path="/register" element={<RegistrationForm />} />
          </Route>
          <Route element={<PublicRoute restricted />}>
            <Route path="/login" element={<AuthorizationForm />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer {...toastOptions} />
    </>
  );
}
