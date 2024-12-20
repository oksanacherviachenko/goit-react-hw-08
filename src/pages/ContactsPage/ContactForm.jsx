import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(addContact(values));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mb-8">
      <h2 className="text-2xl text-orange-400 mb-4">Add New Contact</h2>
      <div className="flex gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="flex-1 px-4 py-2 rounded border border-gray-300 bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-orange-400"
        />
        <input
          type="tel"
          name="number"
          placeholder="Phone Number"
          onChange={formik.handleChange}
          value={formik.values.number}
          className="flex-1 px-4 py-2 rounded border border-gray-300 bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-orange-400"
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-gray-600 text-white py-2 px-6 rounded hover:bg-orange-400 hover:text-gray-900 transition duration-300"
      >
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;







