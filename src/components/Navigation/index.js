import { NavLink } from 'react-router-dom';
import UserMenu from 'components/UserMenu';
import styles from './index.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink className={styles.navLink} to="/contacts">
        Contacts
      </NavLink>
      <ul>
        <li>
          <NavLink className={styles.navLink} to="/register">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navLink} to="/login">
            Sign In
          </NavLink>
        </li>
      </ul>
      {/* <UserMenu /> */}
    </nav>
  );
};

export default Navigation;
