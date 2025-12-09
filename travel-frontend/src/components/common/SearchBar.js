// src/components/common/SearchBar.js
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ value = '', onChange, placeholder = "Search destinations..." }) => {
  const [query, setQuery] = useState(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange?.(query);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onChange?.(e.target.value);
          }}
          placeholder={placeholder}
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <FiSearch size={20} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;