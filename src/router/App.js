//1.
// import {Route} from 'react-router-dom';
// import About from './About';
// import Home from './Home';

// const App = () => {
//   return (
//     <div>
//       {/* 1 */}
//       {/* <Route path="/" component={Home} /> */}
//       {/* 2 */}
//       <Route path="/" component={Home} exact={true} />
//       <Route path="/about" component={About} />
//     </div>
//   );
// };

// export default App;

//2.
// import React from 'react';
// import {Route, Link} from 'react-router-dom';
// import About from './About';
// import Home from './Home';

// const App = () => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="/">홈</Link>
//         </li>
//         <li>
//           <Link to="/about">소개</Link>
//         </li>
//       </ul>
//       <hr />
//       <Route path="/" exact={true}>
//         <Home />
//       </Route>
//       <Route path="/about" component={About} />
//       {/* Route 하나에 여러개의 path 설정하기 */}
//       {/* <Route path={['/about', '/info']} component={About} /> */}
//     </div>
//   );
// };

// export default App;

//3
// import React from 'react';
// import {Route, Link} from 'react-router-dom';
// import About from './About';
// import Home from './Home';
// import Profile from './Profile';

// const App = () => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="/">홈</Link>
//         </li>
//         <li>
//           <Link to="/about">소개</Link>
//         </li>
//         {/* ADD */}
//         <li>
//           <Link to="/profile/pro">pro</Link>
//         </li>
//         <li>
//           <Link to="/profile/beginner">beginner</Link>
//         </li>
//         <li></li>
//       </ul>
//       <hr />
//       <Route path="/" component={Home} exact={true} />
//       <Route path={['/about', '/info']} component={About} />
//       {/* ADD */}
//       <Route path="/profile/:username" component={Profile} />
//     </div>
//   );
// };

// export default App;

//4 서브라우팅
// import React from 'react';
// import {Route, Link} from 'react-router-dom';
// import About from './About';
// import Home from './Home';
// import Profile from './Profile';
// import Profiles from './Profiles';

// const App = () => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="/">홈</Link>
//         </li>
//         <li>
//           <Link to="/about">소개</Link>
//         </li>
//         {/* <li>
//           <Link to="/profile/pro">pro</Link>
//         </li>
//         <li>
//           <Link to="/profile/beginner">beginner</Link>
//         </li> */}
//         <li>
//           <Link to="/profiles">프로필</Link>
//         </li>
//       </ul>
//       <hr />
//       <Route path="/" component={Home} exact={true} />
//       <Route path={['/about', '/info']} component={About} />
//       {/* <Route path="/profile/:username" component={Profile} /> */}
//       <Route path="/profiles" component={Profiles} />
//     </div>
//   );
// };

// export default App;

//5.History
// import React from 'react';
// import {Route, Link, Switch} from 'react-router-dom';
// // import About from "./About.";
// import About from './About';
// import Home from './Home';
// import Profiles from './Profiles';
// import HistorySample from './HistorySample';

// const App = () => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <Link to="/">홈</Link>
//         </li>
//         <li>
//           <Link to="/about">소개</Link>
//         </li>
//         <li>
//           <Link to="/profiles">Profiles</Link>
//         </li>
//         <li>
//           <Link to="/history">History Sample</Link>
//         </li>
//       </ul>
//       <hr />
//       <Route path="/" component={Home} exact={true} />
//       <Route path={['/about', '/info']} component={About} />
//       <Route path="/profiles" component={Profiles} />
//       <Route path="/history" component={HistorySample} />
//     </div>
//   );
// };
// export default App;

//6.switch
import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
// import About from "./About.";
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">Profiles</Link>
        </li>
        <li>
          <Link to="/history">History Sample</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={['/about', '/info']} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          //path를 따로 정의하지 않으면 모든 상황에 렌더링
          render={({location}) => (
            <div>
              <h2>No page found:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};
export default App;
