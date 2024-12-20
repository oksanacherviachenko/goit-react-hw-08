import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/slice';
import { FaTrashAlt, FaEdit, FaCamera } from 'react-icons/fa';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const [editingContactId, setEditingContactId] = useState(null);
  const [editedContact, setEditedContact] = useState({ name: '', number: '' });
  const [contactPhotos, setContactPhotos] = useState({}); 

  const handleEditClick = (id, name, number) => {
    setEditingContactId(id);
    setEditedContact({ name, number });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(updateContact({ id: editingContactId, ...editedContact }));
    setEditingContactId(null);
    setEditedContact({ name: '', number: '' });
  };

  const handlePhotoUpload = (id, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setContactPhotos((prev) => ({ ...prev, [id]: reader.result }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {contacts.map(({ id, name, number }) => (
        <div key={id} className="p-4 bg-gray-800 rounded-lg shadow-md flex flex-col items-center">
          <div className="relative w-24 h-24 mb-4">
            {contactPhotos[id] ? (
              <img
                src={contactPhotos[id]}
                alt={`${name}'s avatar`}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="w-full h-full bg-gray-700 rounded-full flex items-center justify-center text-gray-500">
                <FaCamera size={24} />
              </div>
            )}
            <label className="absolute bottom-0 right-0 bg-gray-600 p-1 rounded-full cursor-pointer hover:bg-gray-700">
              <FaCamera size={16} className="text-white" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handlePhotoUpload(id, e.target.files[0])}
              />
            </label>
          </div>
          {editingContactId === id ? (
            <form onSubmit={handleEditSubmit} className="space-y-2 w-full">
              <input
                type="text"
                value={editedContact.name}
                onChange={(e) => setEditedContact({ ...editedContact, name: e.target.value })}
                className="w-full px-2 py-1 rounded bg-gray-700 text-white"
                placeholder="Name"
              />
              <input
                type="text"
                value={editedContact.number}
                onChange={(e) => setEditedContact({ ...editedContact, number: e.target.value })}
                className="w-full px-2 py-1 rounded bg-gray-700 text-white"
                placeholder="Number"
              />
              <button
                type="submit"
                className="w-full bg-orange-400 text-white py-1 rounded hover:bg-orange-500 transition duration-300"
              >
                Save
              </button>
            </form>
          ) : (
            <div className="text-white mb-4 text-center">
              <p className="text-lg font-bold">{name}</p>
              <p className="text-gray-400">{number}</p>
            </div>
          )}
          <div className="flex gap-4">
            <button
              onClick={() => handleEditClick(id, name, number)}
              className="bg-orange-400 text-white p-2 rounded-full hover:bg-orange-500 transition duration-300"
              title="Edit Contact"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => dispatch(deleteContact(id))}
              className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition duration-300"
              title="Delete Contact"
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;








