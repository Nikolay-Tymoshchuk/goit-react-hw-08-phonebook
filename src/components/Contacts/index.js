import { ContactsList } from 'helpers/lazyRoutes';
import { Filter } from 'components/Filter';
import { Suspense } from 'react';
import styles from './index.module.scss';

export default function Contacts() {
  return (
    <div>
      <h1 className={styles.title}>Contacts Book</h1>
      <Suspense />
      <Filter />
      <ContactsList />
    </div>
  );
}
