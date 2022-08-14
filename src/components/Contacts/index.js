import { ContactsList } from 'helpers/lazyRoutes';
import { Filter } from 'components/Filter';
import { Suspense } from 'react';
import styles from './index.module.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import { Pulsar } from '@uiball/loaders';

export default function Contacts() {
  const navigate = useNavigate();

  const handleClick = e => {
    const url = window.location.href;

    if (url.endsWith('/add')) {
      navigate('/contacts');
      e.target.textContent = 'ADD NEW CONTACT';
      return;
    }
    navigate('/contacts/add');
    e.target.textContent = 'HIDE FORM';
  };

  return (
    <div>
      <h1 className={styles.title}>Contacts Book</h1>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <button className={styles.addBtn} onClick={e => handleClick(e)}>
            ADD NEW CONTACT
          </button>
          <Suspense fallback={<Pulsar color="#02b7ff" />}>
            <Outlet />
          </Suspense>
          <Filter />
        </div>
        <ContactsList />
      </div>
    </div>
  );
}
