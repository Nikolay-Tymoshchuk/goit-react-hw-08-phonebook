import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/authSlice';

export default function PublicRoute({ restricted = false }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>{isLoggedIn && restricted ? <Navigate to="/contacts" /> : <Outlet />}</>
  );
}
