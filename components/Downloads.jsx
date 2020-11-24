import React from 'react';
import styles from '../styles/Download.module.css';
import { CgFileDocument } from 'react-icons/cg';
import { BsDownload } from 'react-icons/bs';

const Download = () => {
  return (
    <div>
      <div className={styles.labelCont}>
        <div className='text-lg text-grey'>Downloads</div>
        <div className={styles.dots}>...</div>
      </div>
      <div>
        <div className={styles.downloadLabel}>Today</div>
        <div className={styles.cont}>
          <div className={styles.iconContainer}>
            <CgFileDocument size='20' color='white' />
          </div>
          <div className={styles.midDesc}>
            <div className='text-sm'>Soccer.mp4</div>
            <div className='text-xs text-grey-100 flex justify-between'>
              <div className='pr-2'>30mb</div>
              <div>waiting for download</div>
            </div>
          </div>
          <div className='px-3'>
            <BsDownload color='#1976D2' />
          </div>
        </div>
      </div>

      <div className='pt-8'>
        <div className={styles.downloadLabel}>Yesterday</div>
        <div className={styles.contOne}>
          <div className={styles.iconContainer}>
            <CgFileDocument size='20' color='white' />
          </div>
          <div className={styles.midDescOne}>
            <div className='text-sm'>Soccer.mp4</div>
            <div className=''>
              <div className={styles.loaderCont}>
                <div className={styles.loader}></div>
              </div>
            </div>
          </div>
          <div className='px-3'>
            <BsDownload color='#1976D2' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
