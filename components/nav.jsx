import React from 'react';
import styles from '../styles/Home.module.css';
import { RiAppsLine } from 'react-icons/ri';
import { CgFile } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { BsCloudUpload } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Nav = () => {
  return (
    <>
      <div className='pb-4'>
        <div className='text-lg'>Files</div>
      </div>

      <div>
        <div className='py-2'>
          <RiAppsLine size='22' />
        </div>
        <div className='py-2'>
          <CgFile size='22' />
        </div>
        <div className='py-2'>
          <FiSettings size='22' />
        </div>
        <div className='py-2'>
          <BsCloudUpload size='22' />
        </div>
        <div className='py-2'>
          <RiDeleteBin6Line size='22' />
        </div>
      </div>
    </>
  );
};

export default Nav;
