//1
// import React from "react";
// import "./NewExpense.css";
// import ExpenseForm from "./ExpenseForm";

// const NewExpense = () => {
//   return (
//     <div className="new-expense">
//       <ExpenseForm />
//     </div>
//   );
// };

// export default NewExpense;

//2
import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    //add after <App.js> 4
    props.onAddExpense(expenseData);
    //부모컴포넌트에게 자식 컴포넌트의 prop을 전달
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
