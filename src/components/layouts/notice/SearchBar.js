import React, { useState } from 'react';

const SearchBar = ({ dispatch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SEARCH',
      payload: searchTerm
    });
  };

  return (
    <form onSubmit={handleSearch}>
      <input className='searchContent'
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className='searchBtn' type="submit">검색</button>
    </form>
  );
};

export default SearchBar;