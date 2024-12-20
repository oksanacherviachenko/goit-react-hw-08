import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

const Layout = () => (
  <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
    <AppBar />
    <main className="flex-grow flex items-center justify-center">
      <Outlet />
    </main>
    <footer className="bg-gray-800 text-white text-center p-4">
      &copy; 2024 Phonebook. All rights reserved.
    </footer>
  </div>
);

export default Layout;


