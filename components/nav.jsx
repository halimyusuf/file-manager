import React from 'react';
import styles from '../styles/Home.module.css';
import { RiAppsLine } from 'react-icons/ri';
import { CgFile } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { BsCloudUpload, BsX } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Nav = ({ nav, setNav }) => {
  return (
    <>
      {nav ? (
        <div className='pb-3' onClick={() => setNav(false)}>
          <BsX size='30' color='black' />
        </div>
      ) : (
        ''
      )}
      <div className='pb-4'>
        <div className='text-lg'>Files</div>
      </div>

      <div>
        <div className='py-2'>
          <RiAppsLine color='grey' size='22' />
        </div>
        <div className='py-2'>
          <CgFile color='grey' size='22' />
        </div>
        <div className='py-2'>
          <FiSettings color='grey' size='22' />
        </div>
        <div className='py-2'>
          <BsCloudUpload color='grey' size='22' />
        </div>
        <div className='py-2'>
          <RiDeleteBin6Line color='grey' size='22' />
        </div>
      </div>
    </>
  );
};

export default Nav;
