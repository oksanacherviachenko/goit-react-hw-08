import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <div className="flex space-x-6">
    <NavLink
      to="/contacts"
      className={({ isActive }) =>
        `text-white hover:text-orange-400 hover:underline transition-all duration-600 ${
          isActive ? 'text-orange-400 underline' : ''
        }`
      }
    >
      Contacts
    </NavLink>
    <NavLink
      to="/register"
      className={({ isActive }) =>
        `text-white hover:text-orange-400 hover:underline transition-all duration-600 ${
          isActive ? 'text-orange-400 underline' : ''
        }`
      }
    >
      Register
    </NavLink>
    <NavLink
      to="/login"
      className={({ isActive }) =>
        `text-white hover:text-orange-400 hover:underline transition-all duration-600 ${
          isActive ? 'text-orange-400 underline' : ''
        }`
      }
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;

