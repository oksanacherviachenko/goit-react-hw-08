import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import SearchBox from './SearchBox';

const ContactsPage = () => (
  <div>
    <h1>Contacts</h1>
    <ContactForm />
    <SearchBox />
    <ContactList />
  </div>
);

export default ContactsPage;

