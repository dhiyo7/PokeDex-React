import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'; // Import the search icon

function SearchBar() {
  return (
    <div className="relative min-w-full">
      <input
        type="text"
        className="bg-white border border-gray-300 rounded-md pl-10 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
        placeholder="Search..."
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <AiOutlineSearch className="text-gray-400" />
      </div>
    </div>
  );
}

export default SearchBar;
