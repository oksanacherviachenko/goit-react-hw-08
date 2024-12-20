import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Must contain an uppercase letter')
    .matches(/[0-9]/, 'Must contain a number')
    .matches(/[@$!%*?&]/, 'Must contain a special character')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const NewPasswordPage = () => {
  const handleSubmit = async (values, { resetForm }) => {
    // Логіка збереження нового паролю
    console.log('New password submitted:', values.password);
    resetForm();
    alert('Your password has been updated.');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl font-bold text-orange-400 mb-4 text-center">Set New Password</h2>
        <Formik
          initialValues={{ password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <Field
                type="password"
                name="password"
                placeholder="New Password"
                className="w-full px-4 py-3 rounded border border-gray-300 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-orange-400"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 mt-2 text-sm" />
            </div>
            <div className="mb-4">
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm New Password"
                className="w-full px-4 py-3 rounded border border-gray-300 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-orange-400"
              />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500 mt-2 text-sm" />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-3 rounded hover:bg-orange-500 transition duration-300"
            >
              Update Password
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default NewPasswordPage;
