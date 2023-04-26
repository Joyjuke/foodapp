//1
// import { useState } from "react";

// // function useCounter() {
// function useCounter(initialCount = 0) {
//   //   const [count, setCount] = useState(0);
//   const [count, setCount] = useState(initialCount);
//   const increment = () => {
//     setCount((prevCount) => prevCount + 1);
//   };
//   const decrement = () => {
//     setCount((prevCount) => prevCount - 1);
//   };
//   const reset = () => {
//     // setCount(0);
//     setCount(initialCount);
//   };

//   return [count, increment, decrement, reset];
// }

// export default useCounter;

//2
import { useState } from "react";

// function useCounter() {
function useCounter(initialCount = 0, value) {
  //   const [count, setCount] = useState(0);
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - value);
  };
  const reset = () => {
    // setCount(0);
    setCount(initialCount);
  };

  return [count, increment, decrement, reset];
}

export default useCounter;
