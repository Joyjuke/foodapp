//1
// import "./Expenses.css";
// import ExpenseItem from "./ExpenseItem";
// // import Card from "../UI/Card";

// const Expenses = (props) => {
//   return (
//     // <div className="expenses">
//     <div className="expenses">
//       <ExpenseItem
//         title={props.items[0].title}
//         amount={props.items[0].amount}
//         date={props.items[0].date}
//       />
//       <ExpenseItem
//         title={props.items[1].title}
//         amount={props.items[1].amount}
//         date={props.items[1].date}
//       />
//       <ExpenseItem
//         title={props.items[2].title}
//         amount={props.items[2].amount}
//         date={props.items[2].date}
//       />
//       <ExpenseItem
//         title={props.items[3].title}
//         amount={props.items[3].amount}
//         date={props.items[3].date}
//       />
//     </div>
//   );
// };

// export default Expenses;

//2
import React from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = props => {
  return (
    // <div className="expenses">
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
};

export default Expenses;

//3
// import React, { useState } from "react";
// import "./Expenses.css";
// import ExpenseItem from "./ExpenseItem";
// import Card from "../UI/Card";
// import ExpensesFilter from "./ExpenseFilter";

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   return (
//     // <div className="expenses">
//     <Card className="expenses">
//       <ExpensesFilter
//         selected={filteredYear}
//         onChangeFilter={filterChangeHandler}
//       />
//       <ExpenseItem
//         title={props.items[0].title}
//         amount={props.items[0].amount}
//         date={props.items[0].date}
//       />
//       <ExpenseItem
//         title={props.items[1].title}
//         amount={props.items[1].amount}
//         date={props.items[1].date}
//       />
//       <ExpenseItem
//         title={props.items[2].title}
//         amount={props.items[2].amount}
//         date={props.items[2].date}
//       />
//       <ExpenseItem
//         title={props.items[3].title}
//         amount={props.items[3].amount}
//         date={props.items[3].date}
//       />
//     </Card>
//   );
// };

// export default Expenses;

//4
// import React, { useState } from "react";

// import ExpenseItem from "./ExpenseItem";
// import Card from "../UI/Card";
// import ExpensesFilter from "./ExpenseFilter";
// import "./Expenses.css";

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   return (
//     <div>
//       <Card className="expenses">
//         <ExpensesFilter
//           selected={filteredYear}
//           onChangeFilter={filterChangeHandler}
//         />
//         {props.items.map((expense) => (
//           <ExpenseItem
//             // "CHANGE"
//             key={expense.id}
//             title={expense.title}
//             amount={expense.amount}
//             date={expense.date}
//           />
//         ))}
//       </Card>
//     </div>
//   );
// };

// export default Expenses;

//5 filtering
// import React, { useState } from "react";

// import ExpenseItem from "./ExpenseItem";
// import Card from "../UI/Card";
// import ExpensesFilter from "./ExpenseFilter";
// import "./Expenses.css";

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   const filteredExpenses = props.items.filter((expense) => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });

//   return (
//     <div>
//       <Card className="expenses">
//         <ExpensesFilter
//           selected={filteredYear}
//           onChangeFilter={filterChangeHandler}
//         />
//         {/* "CHANGE" */}
//         {filteredExpenses.map((expense) => (
//           <ExpenseItem
//             key={expense.id}
//             title={expense.title}
//             amount={expense.amount}
//             date={expense.date}
//           />
//         ))}
//       </Card>
//     </div>
//   );
// };

// export default Expenses;

//6.conditional content
// import React, { useState } from "react";
// import "./Expenses.css";
// import ExpenseItem from "./ExpenseItem";
// import Card from "../UI/Card";
// import ExpensesFilter from "./ExpenseFilter";

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   const filteredExpenses = props.items.filter((expense) => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });

//   let expensesContent = <p>No expenses found.</p>;

//   if (filteredExpenses.length > 0) {
//     expensesContent = filteredExpenses.map((expense) => (
//       <ExpenseItem
//         key={expense.id}
//         title={expense.title}
//         amount={expense.amount}
//         date={expense.date}
//       />
//     ));
//   }

//   return (
//     <div>
//       <Card className="expenses">
//         <ExpensesFilter
//           selected={filteredYear}
//           onChangeFilter={filterChangeHandler}
//         />
//         {expensesContent}
//       </Card>
//     </div>
//   );
// };

// export default Expenses;

//7
// import React, { useState } from "react";
// import "./Expenses.css";
// import Card from "../UI/Card";
// import ExpensesFilter from "./ExpenseFilter";
// import ExpensesList from "./ExpensesList";

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   const filteredExpenses = props.items.filter((expense) => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });

//   //ExpenseList.js로 옮김
//   // let expenseContent = <p>No expenses found.</p>;

//   // if (filteredExpenses.length > 0) {
//   //   expenseContent = filteredExpenses.map((expense) => (
//   //     <ExpenseItem
//   //       key={expense.id}
//   //       title={expense.title}
//   //       amount={expense.amount}
//   //       date={expense.date}
//   //     />
//   //   ));
//   // }

//   return (
//     <div>
//       <Card className="expenses">
//         <ExpensesFilter
//           selected={filteredYear}
//           onChangeFilter={filterChangeHandler}
//         />
//         <ExpensesList items={filteredExpenses} />
//       </Card>
//     </div>
//   );
// };

// export default Expenses;
