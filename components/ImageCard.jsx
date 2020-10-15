import React from 'react';
import { BsPlay } from 'react-icons/bs';

const styles = {
  aa: {
    // max-width
    width: '200px',
    height: '150px',
    position: 'relative',
  },
  a: {
    width: '100%',
    height: '100%',
    opacity: '0.9',
  },
  b: {
    'font-weight': 'light',
    color: 'lightgrey',
    position: 'absolute',
    top: '80%',
  },
  c: {
    display: 'flex',
    width: '100%',
    height: '100%',
    'justify-content': 'space-between',
    position: 'absolute',
    top: '65%',
    color: 'white',
    'z-index': '4',
  },
  d: {
    background: 'white',
    padding: 3,
    'border-radius': '50%',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
  },
};

const ImageCard = (props) => {
  return (
    <div className='px-3'>
      <div style={styles.aa}>
        <img
          src='https://spoilerguy.com/wp-content/uploads/2020/08/demon-tanjiro.jpg'
          alt='tanjiro'
          style={styles.a}
        />
        <div style={styles.c} className='px-2'>
          <div className='text-xs'>{props.text}</div>
          <div>
            <div style={styles.d}>
              <BsPlay color='black' />
            </div>
          </div>
        </div>
        <div className='text-xs pl-2' style={styles.b}>
          {props.size}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
