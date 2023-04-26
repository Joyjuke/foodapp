//1
// import React, {useContext} from 'react'; //returns the context value
// import ComponentF from './8.ComponentF';

// function ComponentE() {

//     <div>
//       <ComponentF />
//     </div>
//   );

// }

// export default ComponentE;

//2 useContext
// import React, {useContext} from 'react'; //returns the context value
// import {UserContext, ChannelContext} from '../App';

// function ComponentE() {
//   const user = useContext(UserContext);
//   const channel = useContext(ChannelContext);
//   return (
//     <div>
//       {user} - {channel}
//     </div>
//   );
// }

// export default ComponentE;

//3. useReducer
// import React, {useContext} from 'react'; //returns the context value
// import {UserContext, ChannelContext} from '../App';

// function ComponentE() {
//   const user = useContext(UserContext);
//   const channel = useContext(ChannelContext);
//   return (
//     <div>
//       {user} - {channel}
//     </div>
//   );

//   //useReducer2
//   // return (
//   //   <div>
//   //     <ComponentF />
//   //   </div>
//   // );
// }

// export default ComponentE;

//4. useReducuer with useContext
import React from 'react';
import ComponentF from './8.ComponentF';

function ComponentE() {
  return (
    <div>
      <ComponentF />
    </div>
  );
}

export default ComponentE;
