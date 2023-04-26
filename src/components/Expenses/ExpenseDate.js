import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = props => {
  const month = props.date.toLocaleString('ko-KR', { month: 'long' });
  const day = props.date.toLocaleString('ko-KR', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    //1
    // <div>
    //   <div>{month}</div>
    //   <div>{year}</div>
    //   <div>{day}</div>
    // </div>
    //2
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      {/* //toLocaleString: change to be readable */}
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};
export default ExpenseDate;
