// import React, { useReducer } from "react";

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// function CounterOne() {
//   const [count, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <div>Count - {count}</div>
//       <button onClick={() => dispatch("increment")}>Increment</button>
//       <button onClick={() => dispatch("decrement")}>Decrement</button>
//       <button onClick={() => dispatch("reset")}>Reset</button>
//     </div>
//   );
// }

// export default CounterOne;

//customHook
import React, {useState} from 'react';
import useCounter from './useCounter';

function CounterOne() {
  // const [count, setCount] = useState(0);
  // const increment = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };
  // const decrement = () => {
  //   setCount((prevCount) => prevCount - 1);
  // };
  // const reset = () => {
  //   setCount(0);
  // };

  // const [count, increment, decrement, reset] = useCounter();
  //after useCounter2 value added
  const [count, increment, decrement, reset] = useCounter(0, 1);

  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterOne;
