import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa';

const HomePage = () => (
  <div
    id="home-page"
    className="w-screen h-screen flex flex-col bg-cover bg-center"
    style={{
      backgroundImage: "url('/background.jpg')",
    }}
  >
    {/* Контейнер для контенту */}
    <div className="flex-grow flex flex-col items-center justify-center text-center text-orange-400 px-4 mt-16 mb-16">
      <div className="w-full max-w-4xl bg-gray-900 bg-opacity-80 shadow-lg rounded-lg p-6 md:p-8 lg:p-10 flex flex-col justify-between">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center">
          <FaBook className="mr-3 text-orange-400" />
          Phonebook
        </h1>
        <p className="text-gray-300 text-base md:text-lg mb-4">
          Your convenient way to store and manage contacts.
        </p>
        <ul className="text-left text-gray-300 mb-4 list-disc list-inside space-y-2">
          <li>Easy to add, edit, and delete contacts.</li>
          <li>Quick search by name or number.</li>
          <li>Secure storage of your data.</li>
          <li>Access from any device.</li>
        </ul>
        <p className="text-gray-300 text-base md:text-lg mb-4">Get started now!</p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/register"
            className="bg-gray-600 text-white px-4 py-2 md:px-6 md:py-3 rounded hover:bg-orange-400 hover:text-gray-900 transition duration-300"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-gray-600 text-white px-4 py-2 md:px-6 md:py-3 rounded hover:bg-orange-400 hover:text-gray-900 transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
    {/* Футер */}
    <footer className="bg-gray-900 text-gray-300 py-4 text-center">
      © 2024 Phonebook. All rights reserved.
    </footer>
  </div>
);

export default HomePage;










