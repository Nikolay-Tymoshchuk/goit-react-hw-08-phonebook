import { Outlet, useNavigate } from 'react-router-dom';
import { Pulsar } from '@uiball/loaders';
import { ContactsList } from 'helpers/lazyRoutes';
import { Filter } from 'components/Filter';
import { Suspense } from 'react';
import { useGetContactsQuery } from 'services/contacts';
import styles from './index.module.scss';
import { useEffect, useState } from 'react';

export default function Contacts() {
  const [isContacts, setIsContacts] = useState(false);
  const navigate = useNavigate();
  const { data: contacts } = useGetContactsQuery();

  useEffect(() => {
    const getData = async () => {
      const contactsCount = await contacts;
      if (contactsCount?.length > 0) {
        setIsContacts(true);
        return;
      }
      setIsContacts(false);
    };
    getData();
  }, [contacts, isContacts]);

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
      <h2 className={styles.title}>Contact Book</h2>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <button className={styles.addBtn} onClick={e => handleClick(e)}>
            ADD NEW CONTACT
          </button>
          <Suspense fallback={<Pulsar color="#5c6386" />}>
            <Outlet />
          </Suspense>
          <Filter />
        </div>
        <div className={styles.listPlace}>
          {isContacts ? (
            <Suspense fallback={<Pulsar color="#5c6386" />}>
              <ContactsList />
            </Suspense>
          ) : (
            <p>Add your first contact</p>
          )}
        </div>
      </div>
    </div>
  );
}
