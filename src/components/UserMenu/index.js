import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import Icon from 'assets/User_icon.svg';

export default function UserMenu() {
  return (
    <div className={styles.userMenu}>
      <img className={styles.icon} src={Icon} alt="User" />
      <span>Hello Mamba</span>
      <button to="/login">Sign Oun</button>
    </div>
  );
}

/* <div class="header__logbuttons-list">
  <button data-log="out" class="header__button-log">
    <img src="images/svg/log-out.svg" alt="logout logo" />
    <span>Log out</span>
  </button>
  <button data-log="in" class="header__button-log">
    <img src="images/svg/log-in.svg" alt="login logo" />
    <span>Log In</span>
  </button>
</div>; */
