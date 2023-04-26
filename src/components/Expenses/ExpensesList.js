import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

//1
// const ExpensesList = (props) => {
//   let expenseContent = <p>No expenses found.</p>;

//   if (props.items.length > 0) {
//     expenseContent = props.items.map((expense) => (
//       <ExpenseItem
//         key={expense.id}
//         title={expense.title}
//         amount={expense.amount}
//         date={expense.date}
//       />
//     ));
//   }
//   return <ul className="expenses-list"></ul>;
// };

// export default ExpensesList;

//2
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
