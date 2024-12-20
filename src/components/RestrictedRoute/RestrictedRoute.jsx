import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const RestrictedRoute = ({ component: Component, redirectTo = '/contacts' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // У разі авторизації перенаправляємо на redirectTo
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;

