import React from 'react';

const SearchBar = ({ searchQuery, handleSearchChange }) => {
  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder="Search.."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="search">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/printerest-clone-773aa.appspot.com/o/right-arrow-symbol%20(1).png?alt=media&token=b2c60ed8-2462-48df-b5d7-610cde874f91"
          alt="search"
        />
      </div>
    </div>
  );
};

export default SearchBar;
