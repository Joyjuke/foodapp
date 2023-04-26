// 1. useState
import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  const increment5 = () => {
    for (let i = 0; i < 5; i++) {
      setValue(prevValue => prevValue + 1);
    }
  };

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={() => setValue(0)}>Reset</button>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
      <button onClick={increment5}>Increment5</button>
    </div>
  );
};

export default Counter;
