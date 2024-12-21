import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';

const Layout = () => (
  <div className="flex flex-col h-screen">
    <AppBar />
    <main className="flex-grow overflow-hidden">
      <Outlet />
    </main>
    <footer className="bg-gray-900 text-white text-center p-4">
      © 2024 Phonebook. All rights reserved.
    </footer>
  </div>
);

export default Layout;





