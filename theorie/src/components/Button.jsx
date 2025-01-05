import React from 'react';

const Button = ({onPouet}) => {
  return (
    <button className='button' onClick={onPouet}>
      Submit
    </button>
  );
};

export default Button;