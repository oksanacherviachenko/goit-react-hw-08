import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/slice'; 
import Contact from './Contact';
import styles from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(selectFilteredContacts); 

  return (
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;



