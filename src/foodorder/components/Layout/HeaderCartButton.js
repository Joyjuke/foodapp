//1
// import React from 'react';
// import CartIcon from '../Cart/CartIcon';
// import classes from './HeaderCartButton.module.css';

// const HeaderCartButton = props => {
//   return (
//     <button className={classes.button}>
//       <span className={classes.icon}>
//         <CartIcon />
//       </span>
//       <span>Your Cart</span>
//       <span className={classes.badge}>3</span>
//     </button>
//   );
// };
// export default HeaderCartButton;

//2
// import React from 'react';
// import CartIcon from '../Cart/CartIcon';
// import classes from './HeaderCartButton.module.css';

// const HeaderCartButton = (props) => {
//   return (
//     <button className={classes.button} onClick={props.onClick}>
//       <span className={classes.icon}>
//         <CartIcon />
//       </span>
//       <span>Your Cart</span>
//       <span className={classes.badge}>3</span>
//     </button>
//   );
// };
// export default HeaderCartButton;

//3
// import React from 'react';
// import CartIcon from '../Cart/CartIcon';
// // "CHANGE"
// import CartContext from '../../store/cart-context';
// import classes from './HeaderCartButton.module.css';
// import {useContext} from 'react';

// const HeaderCartButton = (props) => {
//   // "CHANGE"
//   const cartCtx = useContext(CartContext);

//   // const numberOfCartItems = cartCtx.items.length; //cart아이템은 한종류고 수량은 하나 이상을 추가한다면 items.length는 틀림
//   const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
//     return curNumber + item.amount;
//   }, 0);

//   return (
//     <button className={classes.button} onClick={props.onClick}>
//       <span className={classes.icon}>
//         <CartIcon />
//       </span>
//       <span>Your Cart</span>
//       {/* <span className={classes.badge}>3</span> */}
//       {/* "CHANGE" */}
//       <span className={classes.badge}>{numberOfCartItems}</span>
//     </button>
//   );
// };
// export default HeaderCartButton;

//4
import React from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
// import { useContext } from 'react';
// 3 "CHANGE"
import {useContext, useEffect, useState} from 'react';

const HeaderCartButton = (props) => {
  // 5
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  //9
  const {items} = cartCtx;
  // const numberOfCartItems = cartCtx.items.length; //cart아이템은 한종류고 수량은 하나 이상을 추가한다면 items.length는 틀림
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  // 1 "CHANGE"
  // const btnClasses = `${classes.button} ${classes.bump}`;
  //7
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  //4
  // useEffect(() => {

  // }, [])
  //6
  // useEffect(() => {
  //   setBtnIsHighlighted(true);
  // }, []);

  //8
  useEffect(() => {
    // if (cartCtx.items.length === 0) { //amount가 적어도 하나이상일때 실행되야
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    //10 bump whenever the add button is clicked
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
    // }, [cartCtx]);
  }, [items]);
  //items특정값이 업데이트 될때만 실행

  return (
    // 2 "CHANGE"
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      {/* <span className={classes.badge}>3</span> */}
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
