import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const ResetPasswordPage = () => {
  const handleSubmit = async (values, { resetForm }) => {
    // Логіка надсилання email з посиланням на скидання паролю
    console.log('Reset password request sent for:', values.email);
    resetForm();
    alert('Password reset link sent to your email.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl font-bold text-orange-400 mb-4 text-center">Reset Password</h2>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded border border-gray-300 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-orange-400"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 mt-2 text-sm" />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-3 rounded hover:bg-orange-500 transition duration-300"
            >
              Send Reset Link
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
