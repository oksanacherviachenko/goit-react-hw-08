import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => (
  <div className={`${styles.homePage} min-h-screen flex items-center justify-center`}>
    <div className="text-center max-w-lg bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Phonebook</h1>
      <p className="text-gray-600 text-lg mb-6">
        Your convenient way to store and manage contacts.
      </p>
      <ul className="text-left text-gray-600 mb-6 list-disc list-inside">
        <li>Easy to add, edit, and delete contacts.</li>
        <li>Quick search by name or number.</li>
        <li>Secure storage of your data.</li>
        <li>Access from any device.</li>
      </ul>
      <p className="text-gray-600 text-lg mb-4">Get started now!</p>
      <div className="flex gap-4 justify-center">
        <Link
          to="/register"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200"
        >
          Login
        </Link>
      </div>
    </div>
  </div>
);

export default HomePage;
