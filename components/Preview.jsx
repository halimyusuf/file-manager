import React from 'react';
import ImageCard from './ImageCard';

const styles = {
  a: {
    display: 'flex',
    'justify-content': 'space-between',
  },
  b: {
    'overflow-x': 'scroll',
    'overflow-y': 'hidden',
    display: 'flex',
  },
  c: {
    flex: 1,
  },
};

const Preview = () => {
  return (
    <div>
      <div style={styles.a} className='pr-3'>
        <div> Preview</div>
        <div className='text-primary pointer'>
          <small>View in folders</small>
        </div>
      </div>
      <div className='mt-3' style={styles.b}>
        <div style={styles.c}>
          <ImageCard text='Tanjiro vs Lower moon 6' size='30mb'></ImageCard>
        </div>
        <div style={styles.c}>
          <ImageCard text='Tanjiro vs Lower moon 6' size='30mb'></ImageCard>
        </div>
        <div style={styles.c}>
          <ImageCard text='Tanjiro vs Lower moon 6' size='30mb'></ImageCard>
        </div>
      </div>
    </div>
  );
};

export default Preview;
