import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/auth/operations';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    const result = await dispatch(logIn(values));
    if (result.meta.requestStatus === 'fulfilled') {
      navigate('/contacts');
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="bg-gray-900 bg-opacity-80 text-white shadow-lg rounded-lg p-8 mx-auto w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
        <h2 className="text-4xl font-bold text-orange-400 mb-6 text-center">Login</h2>
        <div className="mb-6">
          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded border border-gray-300 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-orange-400"
          />
          <ErrorMessage name="email" component="div" className="text-red-500 mt-2 text-sm" />
        </div>
        <div className="mb-6">
          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded border border-gray-300 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-orange-400"
          />
          <ErrorMessage name="password" component="div" className="text-red-500 mt-2 text-sm" />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-600 text-white py-3 rounded hover:bg-orange-400 hover:text-gray-900 transition duration-300"
        >
          Login
        </button>
        <p className="mt-6 text-center text-gray-300">
  Forgot your password?{' '}
  <a
    href="/reset-password"
    className="text-orange-400 hover:underline transition duration-300"
  >
    Reset it here
  </a>
</p>

        <p className="mt-6 text-center text-gray-300">
          Don't have an account?{' '}
          <a
            href="/register"
            className="text-orange-400 hover:underline transition duration-300"
          >
            Register here
          </a>
        </p>
      </Form>
    </Formik>
  );
};

export default LoginForm;




