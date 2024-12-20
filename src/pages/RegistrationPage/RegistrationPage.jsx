import React from 'react';
import RegistrationForm from './RegistrationForm';

const RegistrationPage = () => (
  <div
    className="min-h-screen w-full flex items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage: "url('/background.jpg')",
    }}
  >
    <RegistrationForm />
  </div>
);

export default RegistrationPage;




