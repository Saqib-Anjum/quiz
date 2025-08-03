import React from 'react';
import { FaBell, FaSearch } from 'react-icons/fa';

export default function Topbar() {
  return (
    <header className="bg-blue-900 text-white flex items-center justify-between rounded-lg p-4 mb-4">
      <div className="flex items-center bg-blue-800 p-2 rounded-lg">
        <FaSearch />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent ml-2 outline-none placeholder-gray-300"
        />
      </div>
      <div className="flex items-center space-x-4">
        <FaBell />
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </header>
  );
}
