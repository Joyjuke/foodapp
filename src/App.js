///////////////////////////////////////////////////////jsx
// import React from 'react';

// const App = () => {
//   // const para = document.createElement('p');
//   // para.textContent = 'Hello World!!';
//   // document.getElementById('root').append(para);
//   return <h1>Hello World!!</h1>;
// };

// export default App;

//1.JSX 내부에서는 if문 대신 조건부 연산자
// function App() {
//   const name = 'reacta';
//   return <div>{name === 'react' ? <h1>hello</h1> : <h2>you</h2>}</div>;
// }

//2.&& 연산자를 사용한 조건부 렌더링: name값이 react가 아니면 null로 빈화면
// function App() {
//   const name = 'reacta';
//   return <div>{name === 'react' && <h1>hello</h1>}</div>;
// }

//3.Undefined 렌더링 하지 않을시 보여주고 싶은 문구(‘react’)
// function App() {
//   const name = undefined;
//   return <div>{name || 'react'}</div>;
// }

//4.인라인 스타일링과 import
// function App() {
//   const name = 'hello';
//   return (
//     <div
//       style={{
//         backgroundColor: 'black',
//         color: 'aqua',
//         fontSize: '48px',
//         fontWeight: 'bold',
//         padding: 16,
//       }}
//     >
//       {name}
//     </div>
//   );
// }

// import './App.css';

// function App() {
//   const name = 'hello';

//   return <div className="app">{name}</div>;
// }

// export default App;

///////////////////////////////////////////////////////////////////////comnponents
// import React from 'react';
// // import IterationSample from './components/1.IterationSample';
// import Blog from './components/2.Blog';
// import Say from './components/3.Say';

// const App = () => {
//   return (
//     // <IterationSample />
//     <Blog />
//     // <Say />;
//   );
// };

// export default App;

////////////////////////////////////////////////////////lifecycle
import React from 'react';
import {Component} from 'react';
import {render} from 'react-dom';
import LifeCycleSample from './components/4.LifeCycleSample';
import ErrorBoundary from './components/5.ErrorBoundary';

// 랜덤 색상 생성
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    console.log(this);
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      // <div>
      //   <button onClick={this.handleClick}>랜덤색상</button>
      //   <LifeCycleSample color={this.state.color} />
      // </div>
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
//////////////////////////////////////////////////////////////Hooks
// import React from 'react';
// // import Counter from './hooks/1.Counter';
// // import HookCounterThree from './hooks/2.HookCounterThree';
// // import HookCounterFour from './hooks/3.HookCounterFour';
// // import HookCounterOne from './hooks/4.HookCounterOne';
// import HookMouse from './hooks/5.HookMouse';

// const App = () => {
//   return (
//     // <Counter />
//     // <HookCounterThree />
//     // <HookCounterFour />
//     // <HookCounterOne />
//     <HookMouse />
//   );
// };

//export default App;

/////////////////////////////////////////////////////useContext
//1
// import React from 'react';
// import ComponentC from './hooks/6.ComponentC';

// export const UserContext = React.createContext();

// function App() {
//   return (
//     <div className="App">
//       <UserContext.Provider value={'Joy'}>
//         <ComponentC />
//       </UserContext.Provider>
//     </div>

//   );
// }

// export default App;

//2
// import React from 'react';
// import ComponentC from './hooks/6.ComponentC';
// import './App.css';

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

// function App() {
//   return (
//     <div className="App">
//       <UserContext.Provider value={'Joy'}>
//         <ChannelContext.Provider value={'Mega'}>
//           <ComponentC />
//         </ChannelContext.Provider>
//       </UserContext.Provider>
//     </div>
//   );
// }

// export default App;

//3. useReducer CounterOne
// import React from 'react';
// import './App.css';
// // import CounterOne from './hooks/9.CounterOne';
// import CounterTwo from './hooks/10.CounterTwo';
// import CounterThree from './hooks/11.CounterThree';

// function App() {
//   return (
//     <div className="App">
//       {/* <CounterOne /> */}
//       {/* <CounterTwo /> */}
//       <CounterThree />
//     </div>
//   );
// }

// export default App;

//4. useReducer with useContext
//1
// import React from 'react';
// import './App.css';
// import ComponentA from './hooks/ComponentA';
// import ComponentB from './hooks/ComponentB';
// import ComponentC from './hooks/6.ComponentC';

// function App() {
//   return (
//     <div className="App">
//       <ComponentA />
//       <ComponentB />
//       <ComponentC />
//     </div>
//   );
// }

// export default App;

//2
// import React, {useReducer} from 'react';
// import './App.css';
// import ComponentA from './hooks/ComponentA';
// import ComponentB from './hooks/ComponentB';
// import ComponentC from './hooks/6.ComponentC';

// export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     case 'reset':
//       return initialState;
//     default:
//       return state;
//   }
// };

// function App() {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
//       <div className="App">
//         Count = {count}
//         <ComponentA />
//         <ComponentB />
//         <ComponentC />
//       </div>
//     </CountContext.Provider>
//   );
// }

// export default App;

// //useMemo & useCallback & useRef
// import React from 'react';
// import Average from './Average';

// const App = () => {
//   return <Average />;
// };

// export default App;

//customHooks
// import React from 'react';
// import Info from './hooks/Info';

// const App = () => {
//   return <Info />;
// };

// export default App;
