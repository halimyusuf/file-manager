import React from 'react';
import ImageCard from './ImageCard';
import Styles from '../styles/Recent.module.css';

const styles = {
  a: {
    display: 'flex',
    'justify-content': 'space-between',
  },
  b: {
    background: 'white',
    padding: '10px',
    'border-radius': '15px',
  },
  c: {
    flex: 1,
  },
};

const Recent = () => {
  return (
    <div>
      <div style={styles.a} className='pr-3'>
        <div className='text-lg bold'> Recent files</div>
        <div className='text-primary pointer'>
          <small>View in folders</small>
        </div>
      </div>
      <div className='mt-3' style={styles.b}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Size </th>
              <th>Last modified</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>mathematics.pdf</td>
              <td>30mb </td>
              <td>30 june 2020</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Recent;
