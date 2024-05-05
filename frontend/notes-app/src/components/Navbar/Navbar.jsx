import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ProfileInfo from '../Cards/ProfileInfo';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };

  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  };

  return (
    <div className="bg-white shadow-lg flex justify-between items-center px-4 py-1">
      <Link to="/" className="text-lg font-bold text-gray-900 hover:text-gray-800">
        Note Nest
      </Link>

      <div className="flex-grow mx-2">
        <SearchBar
          value={searchQuery}
          onChange={({ target }) => {
            setSearchQuery(target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
      </div>

      <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
