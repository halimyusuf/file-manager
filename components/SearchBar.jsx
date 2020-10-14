import React from 'react';
import styles from '../styles/search.module.css';
import { BiSearchAlt } from 'react-icons/bi';
const SearchBar = () => {
  return (
    <>
      <div className={`${styles.searchIcon}`}>
        <BiSearchAlt color='grey' size='20' />
      </div>
      <input
        className={`${styles.searchInput} text-sm px-8 py-1`}
        placeholder='Type here...'
      />
    </>
  );
};

export default SearchBar;
