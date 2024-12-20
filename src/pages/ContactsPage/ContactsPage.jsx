import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import SearchBox from './SearchBox';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      id="contacts-page"
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/background.jpg')",
      }}
    >
      <div className="w-full max-w-5xl bg-gray-900 bg-opacity-80 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-orange-400 mb-6 text-center">Your Contacts</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;




