//1
// import React from 'react';
// import classes from './MealItemForm.module.css';

// const MealItemForm = props => {
//   return (
//     <form className={classes.form}>
//       <input />
//       <button>+ Add</button>
//     </form>
//   );
// };

// export default MealItemForm;

//2
// import React from 'react';
// import Input from '../../UI/Input';
// import classes from './MealItemForm.module.css';

// const MealItemForm = props => {
//   return (
//     <form className={classes.form}>
//       <Input
//         label="Amount"
//         input={{
//           id: 'amount_' + props.id,
//           type: 'number',
//           min: '1',
//           max: '5',
//           step: '1',
//           defaultValue: '1',
//         }}
//       />
//       <button>+ Add</button>
//     </form>
//   );
// };

// export default MealItemForm;

//3
import React from 'react';

import {useRef, useState} from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  //4
  const [amountIsValid, setAmountIsValid] = useState(true);
  //2
  const amountInputRef = useRef();

  //1
  const submitHandler = (event) => {
    event.preventDefault();

    //3 (2번 등록 후 input ref 추가 후 작성)
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount; //value는 항상 문자열이므로 숫자로 변환

    //5 (useState 추가 후)
    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
    // 이 컴포넌트는 context를 통해 모든 항목을 전달하는 것이 아닌 숫자만 증가시키는 기능이 필요하므로 props로 전달
  };

  return (
    // "CHANGE"
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {/* 6 */}
      {!amountIsValid && <p>Please enter a valid amount (1~5).</p>}
    </form>
  );
};

export default MealItemForm;

//3
// import React from 'react';

// // "CHANGE"
// import {useRef, useState} from 'react';
// import Input from '../../UI/Input';
// import classes from './MealItemForm.module.css';

// const MealItemForm = (props) => {
//   const [amountIsValid, setAmountIsValid] = useState(true);
//   // "CHANGE"
//   const amountInputRef = useRef();

//   const submitHandler = (event) => {
//     event.preventDefault();

//     // "CHANGE" input.js ref생성과 전달 연결 후 추가
//     const enteredAmount = amountInputRef.current.value;
//     const enteredAmountNumber = +enteredAmount;

//     if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
//       setAmountIsValid(false);
//       return;
//     }

//     props.onAddToCart(enteredAmountNumber);
//     // context를 통해 모든 항목을 전달할 필요없음 숫자만 증가시키는 기능이 필요하므로 props로 전달
//   };

//   return (
//     // "CHANGE"
//     <form className={classes.form} onSubmit={submitHandler}>
//       <Input
//         ref={amountInputRef}
//         label="Amount"
//         input={{
//           id: 'amount_' + props.id,
//           type: 'number',
//           min: '1',
//           max: '5',
//           step: '1',
//           defaultValue: '1',
//         }}
//       />
//       <button>+ Add</button>
//       {/* useState추가후 추가 */}
//       {!amountIsValid && <p>Please enter a valid amount (1~5).</p>}
//     </form>
//   );
// };

// export default MealItemForm;
