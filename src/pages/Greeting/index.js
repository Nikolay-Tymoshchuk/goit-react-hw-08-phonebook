import ContactIcon from 'assets/phonebook.svg';
import styles from './index.module.scss';

export default function Greeting() {
  return (
    <section>
      <h1 className={styles.title}>Welcome to your contact book</h1>
      <img className={styles.image} src={ContactIcon} alt="phonebook icon" />
    </section>
  );
}
