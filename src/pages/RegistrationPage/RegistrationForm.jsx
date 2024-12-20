import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/auth/operations';
import { FaUser, FaSignInAlt } from 'react-icons/fa';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*]/, 'Password must contain at least one special character')
    .required('Password is required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { resetForm }) => {
    await dispatch(register(values));
    navigate('/contacts'); 
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="bg-gray-900 bg-opacity-80 text-white shadow-lg rounded-lg p-8 max-w-md w-full mx-auto">
        
        <h1 className="text-4xl font-bold text-orange-400 mb-8 text-center">Registration</h1>

        <div className="mb-6">
          <div className="relative">
            <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="w-full pl-10 py-3 rounded border border-gray-300 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-orange-400"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 mt-2 text-sm" />
          </div>
        </div>
        <div className="mb-6">
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded border border-gray-300 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-orange-400"
          />
          <ErrorMessage name="email" component="div" className="text-red-500 mt-2 text-sm" />
        </div>
        <div className="mb-6">
          <Field
            type="password"
            id="password"
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
          Register
        </button>
        <p className="mt-6 text-center text-gray-300">
          Already have an account?{' '}
          <a
            href="/login"
            className="text-orange-400 hover:underline transition duration-300 inline-flex items-center"
          >
            Login here
            <FaSignInAlt className="ml-2" />
          </a>
        </p>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;





