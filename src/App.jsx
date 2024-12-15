import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import AppBar from './components/AppBar/AppBar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './utils/RestrictedRoute';

const App = () => (
  <div>
    <AppBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/register"
        element={<RestrictedRoute component={RegistrationPage} />}
      />
      <Route
        path="/login"
        element={<RestrictedRoute component={LoginPage} />}
      />
      <Route
        path="/contacts"
        element={<PrivateRoute component={ContactsPage} />}
      />
    </Routes>
  </div>
);

export default App;


