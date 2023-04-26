//1
// import React from 'react';
// import {Link, Route} from 'react-router-dom';
// import Profile from './Profile';

// const Profiles = () => {
//   return (
//     <div>
//       <h3>User List</h3>
//       <ul>
//         <li>
//           <Link to="/profiles/pro">Kim</Link>
//         </li>
//         <li>
//           <Link to="/profiles/beginner">Sang</Link>
//         </li>
//       </ul>

//       <Route path="/profiles" exact render={() => <div>Choose the user</div>} />
//       {/* render: 컴포넌트자체를 전달하는것이 아닌 보여주고 싶은 JSX를 넣어줄 수 있음. 따로 컴포넌트를 만들기 애매한 상황이나 컴포넌트에 props를 별도로 넣어주고 싶을 때 사용 */}
//       <Route path="/profiles/:username" component={Profile} />
//     </div>
//   );
// };

// export default Profiles;

//2.NavLink
import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white',
  };
  return (
    <div>
      <h3>Use List</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/pro">
            Kim
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/beginner">
            gildong
          </NavLink>
        </li>
      </ul>

      <Route path="/profiles" exact render={() => <div>Choose the user</div>} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
