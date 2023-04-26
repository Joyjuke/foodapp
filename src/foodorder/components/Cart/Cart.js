//1
// import React from 'react';
// import Modal from '../UI/Modal';
// import classes from './Cart.module.css';

// const Cart = props => {
//   const cartItems = (
//     <ul className={classes['cart-items']}>
//       {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(item => (
//         <li>{item.name}</li>
//       ))}
//     </ul>
//   );

//   return (
//     <Modal>
//       {cartItems}
//       <div className={classes.total}>
//         <span>Total Amount</span>
//         <span>35.62</span>
//       </div>
//       <div className={classes.actions}>
//         <button className={classes['button--alt']}>Close</button>
//         <button className={classes.button}>Order</button>
//       </div>
//     </Modal>
//   );
// };
// export default Cart;

//2
// import React from 'react';
// import Modal from '../UI/Modal';
// import classes from './Cart.module.css';

// const Cart = (props) => {
//   const cartItems = (
//     <ul className={classes['cart-items']}>
//       {[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map((item) => (
//         <li>{item.name}</li>
//       ))}
//     </ul>
//   );

//   return (
//     // <Modal>
//     // "CHANGE"
//     <Modal onClose={props.onClose}>
//       {cartItems}
//       <div className={classes.total}>
//         <span>Total Amount</span>
//         <span>35.62</span>
//       </div>
//       <div className={classes.actions}>
//         {/* "CHANGE" */}
//         <button className={classes['button--alt']} onClick={props.onClose}>
//           Close
//         </button>
//         <button className={classes.button}>Order</button>
//       </div>
//     </Modal>
//   );
// };

// export default Cart;

//3
// import React from 'react';

// import {useContext} from 'react';
// import CartContext from '../../store/cart-context';
// import Modal from '../UI/Modal';
// import classes from './Cart.module.css';

// const Cart = (props) => {
//   // 1 "CHANGE"
//   const cartCtx = useContext(CartContext);
//   //2
//   // const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
//   const totalAmount = `$${cartCtx.totalAmount}`;
//   //3
//   const hasItems = cartCtx.items.length > 0;
//   const cartItems = (
//     <ul className={classes['cart-items']}>
//       {cartCtx.items.map((item) => (
//         <li>{item.name}</li>
//       ))}
//     </ul>
//   );

//   return (
//     <Modal onClose={props.onClose}>
//       {cartItems}
//       <div className={classes.total}>
//         <span>Total Amount</span>
//         {/* "CHANGE" */}
//         <span>{totalAmount}</span>
//       </div>
//       <div className={classes.actions}>
//         <button className={classes['button--alt']} onClick={props.onClose}>
//           Close
//         </button>
//         {hasItems && <button className={classes.button}>Order</button>}
//       </div>
//     </Modal>
//   );
// };

// export default Cart;

//4
// import React from 'react';
// import {useContext} from 'react';

// import Modal from '../UI/Modal';
// // "CHANGE"
// import CartItem from './CartItem';
// import classes from './Cart.module.css';
// import CartContext from '../../store/cart-context';

// const Cart = (props) => {
//   const cartCtx = useContext(CartContext);

//   // const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
//   const totalAmount = `$${cartCtx.totalAmount}`;
//   const hasItems = cartCtx.items.length > 0;

//   const cartItemRemoveHandler = (id) => {};

//   const cartItemAddHandler = (item) => {};

//   const cartItems = (
//     <ul className={classes['cart-items']}>
//       {cartCtx.items.map((item) => (
//         <CartItem
//           key={item.id}
//           name={item.name}
//           amount={item.amount}
//           price={item.price}
//           // bind의 두번째 인자가 excuted될때 함수를 실행
//           onRemove={cartItemRemoveHandler.bind(null, item.id)}
//           onAdd={cartItemAddHandler.bind(null, item)}
//         />
//       ))}
//     </ul>
//   );

//   return (
//     <Modal onClose={props.onClose}>
//       {cartItems}
//       <div className={classes.total}>
//         <span>Total Amount</span>
//         <span>{totalAmount}</span>
//       </div>
//       <div className={classes.actions}>
//         <button className={classes['button--alt']} onClick={props.onClose}>
//           Close
//         </button>
//         {hasItems && <button className={classes.button}>Order</button>}
//       </div>
//     </Modal>
//   );
// };

// export default Cart;

//5
import React from 'react';
import {useContext} from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  // const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const totalAmount = `$${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    // "CHANGE" cartprovider remove기능 추가 후
    cartCtx.removeItem(id);
  };

  // "CHANGE"
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1});
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
