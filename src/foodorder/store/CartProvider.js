/////////////////////////////////////////////1
// import React from 'react';
// import CartContext from './cart-context';

// const CartProvider = (props) => {
//   const addItemToCartHandler = (item) => {};
//   const removeItemFromCartHandler = (id) => {};

//   const cartContext = {
//     items: [],
//     totlaAmount: 0,
//     addItem: addItemToCartHandler,
//     removeItem: removeItemFromCartHandler,
//   };
//   return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
// };

// export default CartProvider;

///////////////////////////////////2
//1
// import React from 'react';
// import {useReducer} from 'react';
// import CartContext from './cart-context';

// //1-4
// const defaultCartState = {
//   items: [],
//   totalAmount: 0,
// };

// //1-3
// const cartReducer = (state, action) => {
//   return defaultCartState;
// };

// const CartProvider = (props) => {
//   //1-5
//   const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
//   //1-2
//   const addItemToCartHandler = (item) => {};

//   const removeItemFromCartHandler = (id) => {};

//   //1-1
//   const cartContext = {
//     // items: [],
//     // 1-6 차후 변경
//     items: cartState.items,
//     totlaAmount: cartState.totalAmount,
//     addItem: addItemToCartHandler,
//     removeItem: removeItemFromCartHandler,
//   };
//   return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
// };

// export default CartProvider;

//2
// import React from 'react';
// import {useReducer} from 'react';
// import CartContext from './cart-context';

// const defaultCartState = {
//   items: [],
//   totalAmount: 0,
// };

// const cartReducer = (state, action) => {
//   // //2-2
//   if (action.type === 'ADD') {
//     const updatedItems = state.items.concat(action.item);
//     const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
//     return {
//       items: updatedItems,
//       totlaAmount: updatedTotalAmount,
//     };
//   }

//   return defaultCartState;
// };

// const CartProvider = (props) => {
//   const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

//   // //2-1
//   const addItemToCartHandler = (item) => {
//     dispatchCartAction({type: 'ADD', item: item});
//   };
//   const removeItemFromCartHandler = (id) => {
//     dispatchCartAction({type: 'REMOVE', id: id});
//   };

//   const cartContext = {
//     items: cartState.items,
//     totalAmount: cartState.totlaAmount,
//     addItem: addItemToCartHandler,
//     removeItem: removeItemFromCartHandler,
//   };
//   return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
// };

// export default CartProvider;

/////////////////////////////////////////3
import React from 'react';
import {useReducer} from 'react';
import CartContext from './cart-context';
const defaultCartState = {
  items: [],
  totlaAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    // CHANGE
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
      //이전 아이템을 새로운 아이템으로 대체
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  // "CHANGE"
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {...existingItem, amount: existingItem.amount - 1};
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const cartContext = {
    items: cartState.items,
    totlaAmount: cartState.totlaAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
