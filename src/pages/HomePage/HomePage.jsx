import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook } from 'react-icons/fa'; 

const HomePage = () => (
  <div
    id="home-page"
    className="w-screen h-screen flex flex-col bg-cover bg-center overflow-hidden"
    style={{
      backgroundImage: "url('/background.jpg')",
    }}
  >
    
    <div className="flex-grow flex items-center justify-center text-center text-orange-400 px-4">
      <div className="w-full max-w-4xl bg-gray-900 bg-opacity-80 shadow-lg rounded-lg p-10">
        <h1 className="text-6xl font-bold mb-8 flex items-center justify-center">
          <FaBook className="mr-3 text-orange-400" /> 
          Phonebook
        </h1>
        <p className="text-gray-300 text-2xl mb-8">
          Your convenient way to store and manage contacts.
        </p>
        <ul className="text-left text-gray-300 mb-8 list-disc list-inside space-y-4">
          <li>Easy to add, edit, and delete contacts.</li>
          <li>Quick search by name or number.</li>
          <li>Secure storage of your data.</li>
          <li>Access from any device.</li>
        </ul>
        <p className="text-gray-300 text-2xl mb-8">Get started now!</p>
        <div className="flex gap-6 justify-center">
          <Link
            to="/register"
            className="bg-gray-600 text-white px-8 py-4 rounded hover:bg-orange-400 hover:text-gray-900 transition duration-300"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="bg-gray-600 text-white px-8 py-4 rounded hover:bg-orange-400 hover:text-gray-900 transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;






