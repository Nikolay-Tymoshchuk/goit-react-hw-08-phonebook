import wonderWError from 'assets/wonderW.svg';
import styles from './index.module.scss';

export default function ErrorPlug() {
  return (
    <section className={styles.section}>
      <h2 className="visually-hidden">Page not found</h2>
      <img
        className={styles.panda}
        src={wonderWError}
        alt="Wonder Worker customed error page"
      />
    </section>
  );
}
