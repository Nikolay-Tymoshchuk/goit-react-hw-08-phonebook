import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';
import { Pulsar } from '@uiball/loaders';
import Navigation from 'components/Navigation';

const Layout = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.innerContainer}> */}
      <header className={styles.headerBar}>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Pulsar color="#ff4500" />}>
          <Outlet />
        </Suspense>
      </main>
      {/* </div> */}
    </div>
  );
};

export default Layout;
