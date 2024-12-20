import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa'; // Імпортуємо іконку з бібліотеки react-icons
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      {/* Логотип */}
      <Link
        to="/"
        className="flex items-center text-2xl font-bold text-orange-400 hover:text-orange-500 hover:underline transition-all duration-300"
      >
        <FaBook className="mr-2 text-orange-400" /> {/* Іконка зліва від назви */}
        Phonebook
      </Link>
      {/* Навігація */}
      <nav className="flex space-x-6">
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};

export default AppBar;

