import { signOut } from 'redux/authSlice';
import { getUserName } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from 'services/auth';
import { contactsAPI } from 'services/contacts';
import styles from './index.module.scss';
import Avatar from 'react-avatar';

export default function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout();
      await dispatch(signOut());
      await dispatch(contactsAPI.util.resetApiState());
    } catch (error) {
      console.log(error);
    } finally {
      navigate('/');
    }
  };

  const name = useSelector(getUserName);
  return (
    <div className={styles.userMenu}>
      <Avatar className={styles.avatar} name={name}></Avatar>
      <span className={styles.name}>Hello {name}</span>
      <button className={styles.exit} type="button" onClick={handleLogout}>
        Sign Out
      </button>
    </div>
  );
}
