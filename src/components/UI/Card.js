// import React from 'react';
// import './Card.css';

// //1 화면이 사라짐
// // function Card() {
// //   return <div className="card"></div>;
// // }

// //2 CHANGE prop을 전달해야함
// const Card = props => {
//   //먼저 실행: 레이아웃이 엉망됨
//   // return <div className="card">{props.children}</div>;
//   //CHANGE 클래스를 수정
//   const classes = 'card ' + props.className;
//   return <div className={classes}>{props.children}</div>;
// };

// export default Card;

import React from 'react';

import './Card.css';

const Card = props => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
