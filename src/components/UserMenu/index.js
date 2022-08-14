// import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import Icon from 'assets/User_icon.svg';
import Avatar from 'react-avatar';

export default function UserMenu() {
  return (
    <div className={styles.userMenu}>
      <span>Hello Mamba</span>
      <button type="button">Sign Oun</button>
    </div>
  );
}
