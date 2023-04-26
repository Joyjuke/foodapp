//1
// import React from "react";
// import "./ExpenseForm.css";

// const ExpenseForm = () => {
//   return (
//     <form>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input type="text" />
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input type="number" min="0.01" step="0.01" />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input type="date" min="2019-01-23" step="2023-12-31" />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;

//2
// import "./ExpenseForm.css";

// const ExpenseForm = (props) => {
//   const titleChangeHandler = (e) => {
//     console.log("Title changed");
//     // console.log(e); //콘솔에서 target. value property 확인
//     // console.log(e.target.value);
//   };

//   return (
//     <form>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           {/* "CHANGE" */}
//           <input type="text" onChange={titleChangeHandler} />
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input type="number" min="0.01" step="0.01" />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input type="date" min="2019-01-23" step="2023-12-31" />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;

//3
// import React, { useState } from "react";
// import "./ExpenseForm.css";

// const ExpenseForm = (props) => {
//   const [enteredTitle, setEnteredTitle] = useState("");
//   const [enteredAmount, setEnteredAmount] = useState("");
//   const [enteredDate, setEnteredDate] = useState("");

//   const titleChangeHandler = (e) => {
//     setEnteredTitle(e.target.value);
//   };
//   const amountChangeHandler = (e) => {
//     setEnteredAmount(e.target.value);
//   };
//   const dateChangeHandler = (e) => {
//     setEnteredDate(e.target.value);
//   };

//   // //한번에 객체로 하는 경우
//   // const [userInput, setUserInput] = useState({
//   //   enteredTitle: "",
//   //   enteredAmount: "",
//   //   enteredDate: "",
//   // });

//   // const titleChangeHandler = (e) => {
//   //   // setUserInput({
//   //   //   ...userInput,
//   //   //   enteredTitle: e.target.value,
//   //   // });
//   //   setUserInput((prevState) => {
//   //     return { ...prevState, enteredTitle: e.target.value };
//   //   });
//   // };
//   // const amountChangeHandler = (e) => {
//   //   // setUserInput({
//   //   //   ...userInput,
//   //   //   enteredAmount: e.target.value,
//   //   // });
//   //   setUserInput((prevState) => {
//   //     return { ...prevState, enteredAmount: e.target.value };
//   //   });
//   // };
//   // const dateChangeHandler = (e) => {
//   //   // setUserInput({
//   //   //   ...userInput,
//   //   //   enteredDate: e.target.value,
//   //   // });
//   //   setUserInput((prevState) => {
//   //     return { ...prevState, enteredDate: e.target.value };
//   //   });
//   // };

//   return (
//     <form>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           {/* "CHANGE" */}
//           <input type="text" onChange={titleChangeHandler} />
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           {/* "CHANGE" */}
//           <input
//             type="number"
//             min="0.01"
//             step="0.01"
//             onChange={amountChangeHandler}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           {/* "CHANGE" */}
//           <input
//             type="date"
//             min="2019-01-23"
//             step="2023-12-31"
//             onChange={dateChangeHandler}
//           />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;

//4
import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    //to be added after NewExpense 2번
    //props from child(NewExpense) to parent(ExpenseForm) for a function execution in child component
    props.onSaveExpenseData(expenseData);

    console.log(expenseData);
    //clearing input
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    // "CHANGE"
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            // "CHANGE"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            // "CHANGE"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-23"
            step="2023-12-31"
            // "CHANGE"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
