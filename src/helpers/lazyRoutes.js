import { lazy } from 'react';

export const ContactsBook = lazy(
  () => import('../pages/Contacts') /* webpackChunkName: "contacts_book" */
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
      '../pages/AuthorizationForm'
    ) /* webpackChunkName: "authorization_form" */
);
export const RegistrationForm = lazy(
  () =>
    import(
      '../pages/RegistrationForm'
    ) /* webpackChunkName: "registration_form" */
);
export const Home = lazy(
  () => import('../pages/Greeting') /* webpackChunkName: "greeting_page" */
);
export const ErrorPlug = lazy(
  () => import('../pages/ErrorPlug') /* webpackChunkName: "404page" */
);
