import React from 'react';
import LoginForm from './LoginForm';

const LoginPage = () => (
  <div
    className="w-screen h-screen flex items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage: "url('/src/assets/background.jpg')",
    }}
  >
    <LoginForm />
  </div>
);

export default LoginPage;


