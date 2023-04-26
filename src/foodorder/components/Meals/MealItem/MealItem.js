//1
// import React from 'react';
// import classes from './MealItem.module.css';

// const MealItem = props => {
//   const price = `$${props.price.toFixed(2)}`;
//   return (
//     <li className={classes.meal}>
//       <div>
//         <h3>{props.name}</h3>
//         <div className={classes.description}>{props.description}</div>
//         <div className={classes.price}>{price}</div>
//       </div>
//       <div></div>
//     </li>
//   );
// };
// export default MealItem;

//2
// import React from 'react';
// import MealItemForm from './MealItemForm';
// import classes from './MealItem.module.css';

// const MealItem = props => {
//   const price = `$${props.price.toFixed(2)}`;
//   return (
//     <li className={classes.meal}>
//       <div>
//         <h3>{props.name}</h3>
//         <div className={classes.description}>{props.description}</div>
//         <div className={classes.price}>{price}</div>
//       </div>
//       <div>
//         <MealItemForm />
//       </div>
//     </li>
//   );
// };
// export default MealItem;

//3
import React from 'react';

import {useContext} from 'react';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  // 3 "CHANGE"
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  // 2 "CHANGE"
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      /////3번 이후 추가 cartprovider의 아이템들을 전달
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      //////////
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        {/*1  "CHANGE" */}
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
