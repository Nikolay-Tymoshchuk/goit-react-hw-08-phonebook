import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';
import { Pulsar } from '@uiball/loaders';
import Header from 'components/Header';
// import { useGetImageQuery } from 'services/layout_img';

const Layout = () => {
  // const { data: bgImage } = useGetImageQuery();

  return (
    <div
      className={styles.container}
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header />
      <div className={styles.innerContainer}>
        <main>
          <Suspense fallback={<Pulsar color="#5c6386" />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default Layout;
