import { NavLink } from 'react-router-dom';
import UserMenu from 'components/UserMenu';
import styles from './index.module.scss';
import { getIsLoggedIn } from 'redux/authSlice';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav className={styles.navigation}>
      <NavLink className={styles.navLink} to="/">
        Home
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink className={styles.navLink} to="/contacts">
            Contacts
          </NavLink>
          <UserMenu />
        </>
      ) : (
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
      )}
    </nav>
  );
};

export default Navigation;
