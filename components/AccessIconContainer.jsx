import React from 'react';

const Container = ({ color, children }) => {
  const divStyle = {
    backgroundColor: color,
    'border-radius': '5px',
    width: '40px',
    display: 'flex',
    'justify-content': 'center',
  };
  return (
    <>
      <div style={divStyle} className='px-4 py-2'>
        {children}
      </div>
      <small>Images</small>
    </>
  );
};

export default Container;
