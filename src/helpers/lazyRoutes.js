import { lazy } from 'react';

export const ContactsBook = lazy(
  () => import('../components/Contacts') /* webpackChunkName: "contacts_book" */
);
export const AddContactsForm = lazy(
  () =>
    import(
      '../components/ContactsForm'
    ) /* webpackChunkName: "contacts_add_form" */
);
export const ContactsList = lazy(
  () =>
    import('../components/ContactsList') /* webpackChunkName: "contacts_list" */
);
export const AuthorizationForm = lazy(
  () =>
    import(
      '../components/AuthorizationForm'
    ) /* webpackChunkName: "authorization_form" */
);
export const RegistrationForm = lazy(
  () =>
    import(
      '../components/RegistrationForm'
    ) /* webpackChunkName: "registration_form" */
);
// export const ErrorPlug = lazy(
//   () => import('../components/error-plug') /* webpackChunkName: "404page" */
// );
