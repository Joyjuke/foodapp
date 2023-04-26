//1
// import React from 'react';
// import {UserContext} from '../App';

// function ComponentF() {
//   return (
//     <div>
//       <UserContext.Consumer>
//         {(user) => {
//           return <div>User context value {user}</div>;
//         }}
//       </UserContext.Consumer>
//     </div>
//   );
// }

// export default ComponentF;

//2 useContext사용전, context를 여러개 생성하면 코드의 복잡함 --> componentE
// import React from 'react';
// import {UserContext, ChannelContext} from '../App';

// function ComponentF() {
//   return (
//     <div>
//       <UserContext.Consumer>
//         {(user) => {
//           return (
//             <ChannelContext.Consumer>
//               {(channel) => {
//                 return (
//                   <div>
//                     User context value {user}, Channel context value {channel}
//                   </div>
//                 );
//               }}
//             </ChannelContext.Consumer>
//           );
//         }}
//       </UserContext.Consumer>
//     </div>
//   );
// }

// export default ComponentF;

//useReducer2
import React, {useContext} from 'react';
import {CountContext} from '../App';

function ComponentF() {
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentF - {countContext.countState}
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
      <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  );
}

export default ComponentF;
