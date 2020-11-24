import React from 'react';
import styles from '../styles/search.module.css';
import { BiSearchAlt, BiCaretRight, BiArrowToRight } from 'react-icons/bi';
import { BsDownload } from 'react-icons/bs';
const SearchBar = () => {
  return (
    <div className={styles.barCont}>
      <div className='px-3'>
        <BiCaretRight color='#1976D2' size='30' />
      </div>
      {/* <div className={`${styles.searchIcon}`}>
        <BiSearchAlt color='grey' size='25' />
      </div> */}
      <input
        className={`${styles.searchInput} text-sm px-8 py-3`}
        placeholder='Type here...'
      />
      <div className='px-3'>
        <BsDownload color='#1976D2' size='30' />
      </div>
    </div>
  );
};

export default SearchBar;
