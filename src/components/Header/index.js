import { NavLink } from 'react-router-dom';
import UserMenu from 'components/UserMenu';
import styles from './index.module.scss';
import { getIsLoggedIn } from 'redux/authSlice';
import { useSelector } from 'react-redux';

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className={styles.headerBar}>
      <nav aria-label="primary-navigation">
        <ul>
          <li>
            <NavLink className={styles.navLink} to="/">
              Home
            </NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink className={styles.navLink} to="/contacts">
                Contacts
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      {!isLoggedIn && (
        <nav aria-label="authorization-navigation">
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
        </nav>
      )}
      {isLoggedIn && <UserMenu />}
    </header>
  );
};

export default Header;
