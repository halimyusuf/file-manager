import React from 'react';
import styles from '../styles/search.module.css';
import { BiSearchAlt, BiCaretRight, BiArrowToRight } from 'react-icons/bi';
import { VscMenu } from 'react-icons/vsc';
import { GoCloudDownload } from 'react-icons/go';
import { BsDownload } from 'react-icons/bs';
const SearchBar = ({ setDownload, setNav, downloadRange, navRange }) => {
  return (
    <div className={styles.barCont}>
      {!navRange && (
        <div className='hide-lg pr-4'>
          <VscMenu size='25' onClick={() => setNav(true)} />
        </div>
      )}
      {/* <div className={`${styles.searchIcon}`}>
        <BiSearchAlt color='grey' size='25' />
      </div> */}

      <input
        className={`${styles.searchInput} text-sm px-4 py-2`}
        placeholder='Type here...'
      />
      {!downloadRange && (
        <div className='pl-3' onClick={() => setDownload(true)}>
          <GoCloudDownload color='#1976D2' size='25' />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
