import React, { useState } from 'react';
import './NumberCounter.css'

const NumberCounter = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = (incrementValue) => {
    setValue((prevValue) => prevValue + incrementValue);
  };

  const handleDecrement = (decrementValue) => {
    setValue((prevValue) => prevValue - decrementValue);
  };

  return (
    <div className='container'>
        <div className='input-container'>
        <input type="text" value={value} readOnly  />
        </div>

     

      <button onClick={() => handleIncrement(1)}>+1</button>
      <button onClick={() => handleDecrement(1)}>-1</button>
      <button onClick={() => handleIncrement(10)}>+10</button>
      <button onClick={() => handleDecrement(10)}>-10</button>
    </div>
  );
};

export default NumberCounter;
