import React from 'react';

const Container = ({ color, children }) => {
  const divStyle = {
    backgroundColor: color,
    'border-radius': '5px',
    width: '60px',
    display: 'flex',
    'justify-content': 'center',
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={divStyle} className='px-4 py-4'>
        {children}
      </div>
      <small>Images</small>
    </div>
  );
};

export default Container;
