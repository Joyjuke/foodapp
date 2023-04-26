//1. passing props
// import React from 'react';
// import './ExpenseItem.css';

// const ExpenseItem = () => {
//   const expenseDate = new Date(2023, 2, 13);
//   const expenseTitle = 'Car Insurance';
//   const expenseAmount = 293.25;

//   return (
//     <div className="expense-item">
//       <div>{expenseDate.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{expenseTitle}</h2>
//         <div className="expense-item__price">${expenseAmount}</div>
//       </div>
//     </div>
//   );
// };

// export default ExpenseItem;

//2.
// import React from 'react';
// import ExpenseDate from './ExpenseDate';
// import './ExpenseItem.css';

// function ExpenseItem(props) {
//   return (
//     <div className="expense-item">
//       <div>{props.date.toISOString()}</div>
//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//     </div>
//   );
// }
// export default ExpenseItem;

//3. -date in human readable format
// import React from 'react';
// import './ExpenseItem.css';

// function ExpenseItem(props) {
//   const month = props.date.toLocaleString('ko-KR', { month: 'long' });
//   const day = props.date.toLocaleString('ko-KR', { day: '2-digit' });
//   const year = props.date.getFullYear();
//   return (
//     <div className="expense-item">
//       <div>
//         <div>{month}</div>
//         <div>{year}</div>
//         <div>{day}</div>
//       </div>
//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//     </div>
//   );
// }

// export default ExpenseItem;

//4. Splitting components into multiple components
// import React from 'react';
// import ExpenseDate from './ExpenseDate';
// import './ExpenseItem.css';

// function ExpenseItem(props) {
//   return (
//     <div className="expense-item">
//       {/* "CHANGE" */}
//       {/* <ExpenseDate />*/}
//       <ExpenseDate date={props.date} />
//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//     </div>
//   );
// }

// export default ExpenseItem;

//5. The concept of composition(children props)
// Card UI 적용
import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = props => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;

//6. buttons useState
// import ExpenseDate from "./ExpenseDate";
// import "./ExpenseItem.css";
// import Card from "../UI/Card";

// const ExpenseItem = (props) => {
//   let title = props.title;

//   const clickHandler = () => {
//     title = "Updated";
//     console.log(title);
//   };

//   return (
//     <Card className="expense-item">
//       <ExpenseDate date={props.date} />
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//       <button onClick={clickHandler}>Change Title</button>
//     </Card>
//   );
// };

// export default ExpenseItem;

// //7 useState
// import React, { useState } from "react";
// import ExpenseDate from "./ExpenseDate";
// import "./ExpenseItem.css";
// import Card from "../UI/Card";

// const ExpenseItem = (props) => {
//   const [title, setTitle] = useState(props.title);
//   console.log("first");

//   const clickHandler = () => {
//     // "CHANGE"
//     setTitle("Updated!");
//     console.log(title);
//   };

//   return (
//     <Card className="expense-item">
//       <ExpenseDate date={props.date} />
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//       <button onClick={clickHandler}>Change Title</button>
//     </Card>
//   );
// };

// export default ExpenseItem;

// 8
// import React from "react";

// import ExpenseDate from "./ExpenseDate";
// import Card from "../UI/Card";
// import "./ExpenseItem.css";

// const ExpenseItem = (props) => {
//   return (
//     <Card className="expense-item">
//       <ExpenseDate date={props.date} />
//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//     </Card>
//   );
// };

// export default ExpenseItem;
