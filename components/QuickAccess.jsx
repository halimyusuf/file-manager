import React from 'react';
import IconCont from './AccessIconContainer';
import { BsMusicNoteList, BsDownload, BsImages } from 'react-icons/bs';
import { FiVideo } from 'react-icons/fi';
import { IoMdAppstore } from 'react-icons/io';
import { CgFileDocument } from 'react-icons/cg';

const QuickAccess = () => {
  const generateRandomColor = () => {};
  return (
    <div className='pt-6'>
      <div className='text-lg pb-4'>Quick Access</div>
      <div className='flex flex-wrap justify-space-between'>
        <div className='px-3 py-2'>
          <IconCont color='#1976D2'>
            <div>
              <BsMusicNoteList size='20' color='#fff' />
            </div>
          </IconCont>
        </div>
        <div className='px-3 py-2'>
          <IconCont color='#1976D2'>
            <div>
              <FiVideo size='20' color='#fff' />
            </div>
          </IconCont>
        </div>
        <div className='px-3 py-2'>
          <IconCont color='#1976D2'>
            <div>
              <CgFileDocument size='20' color='#fff' />
            </div>
          </IconCont>
        </div>
        <div className='px-3 py-2'>
          <IconCont color='#1976D2'>
            <div>
              <BsDownload size='20' color='#fff' />
            </div>
          </IconCont>
        </div>
        <div className='px-3 py-2'>
          <IconCont color='#1976D2'>
            <div>
              <IoMdAppstore size='20' color='#fff' />
            </div>
          </IconCont>
        </div>
        <div className='px-3 py-2'>
          <IconCont color='#1976D2'>
            <div>
              <BsImages size='20' color='#fff' />
            </div>
          </IconCont>
        </div>
      </div>
    </div>
  );
};

export default QuickAccess;
