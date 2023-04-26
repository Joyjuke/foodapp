//1
// import React from 'react';
// import { Fragment } from 'react';

// import Header from './components/Layout/Header';

// function App() {
//   return (
//     <Fragment>
//       <Header />
//     </Fragment>
//   );
// }

// export default App;

//2
// import React from 'react';
// import { Fragment } from 'react';

// import Header from './components/Layout/Header';
// import Meals from './components/Meals/Meals';
// // "CHANGE" 치후추가
// import Cart from './components/Cart/Cart';

// function App() {
//   return (
//     <Fragment>
//       // "CHANGE" 치후추가
//       <Cart />
//       <Header />
//       <main>
//         <Meals />
//       </main>
//     </Fragment>
//   );
// }

// export default App;

//3
// import React from 'react';
// // "CHANGE"
// import {Fragment, useState} from 'react';

// import Header from './components/Layout/Header';
// import Meals from './components/Meals/Meals';
// import Cart from './components/Cart/Cart';

// function App() {
//   // "CHANGE"
//   const [cartIsShown, setCartIsShown] = useState(false);

//   const showCartHandler = () => {
//     setCartIsShown(true);
//   };

//   const hideCartHandler = () => {
//     setCartIsShown(false);
//   };

//   return (
//     <Fragment>
//       // "CHANGE"
//       {/* {cartIsShown && <Cart />} */}
//       {cartIsShown && <Cart onClose={hideCartHandler} />}
//       <Header onShowCart={showCartHandler} />
//       <main>
//         <Meals />
//       </main>
//     </Fragment>
//   );
// }

// export default App;

//4
import React from 'react';
import {useState} from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
// "CHANGE"
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    // "CHANGE"
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
