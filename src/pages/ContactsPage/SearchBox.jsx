import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      onChange={e => dispatch(changeFilter(e.target.value))}
      placeholder="Search contacts"
      className="w-full px-4 py-3 mb-6 rounded border border-gray-300 bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-orange-400"
    />
  );
};

export default SearchBox;






