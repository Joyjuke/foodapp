//1. hello world
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// // function Hello(props) {
// //   return <h1>Hello World!!</h1>;
// // }

// const myfirstelement = <h1>Hello React!</h1>;

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<Hello />);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myfirstelement);

//2.jsx & 1~3
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';

// const root = createRoot(document.getElementById('root'));

// root.render(<App />);

//3. expenses
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './components/App';
// import './index.css';

// const root = createRoot(document.getElementById('root'));

// root.render(<App />);

// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import './index.css';
// import App from "./router/App";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root"),
// );

//4 hooks, styling, todo
import React from 'react';
import ReactDOM from 'react-dom';
// import "./index.css";
// import App from './components/App';
import App from './App';
// import App from "./componentsC/App";
// import App from './styling/App';
// import App from './todo/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

//router
//1.
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';
// //HTML5의 History API를 사용하여 페이지를 새로고침하지 않고도 주소를 변경하고, 현재 주소에 관련된 정보를 props로 쉽게 조회하거나 사용할 수 있도록 해줌
// import './index.css';
// import App from './router/App';
// // import App from './router/src/App';
// // import App from './newsviewer/App';

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root'),
// );

// // router2
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import {BrowserRouter} from 'react-router-dom';

// // import './index.css';
// import App from './router2/App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
// );

//redux
// import ReactDOM from 'react-dom/client';
// import App from './redux/App';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import './index.css';
// import rootReducer from './redux/modules';
// import {composeWithDevTools} from 'redux-devtools-extension';

// const store = createStore(rootReducer, composeWithDevTools());

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
// );

//swapi
// import React from 'react';
// import {StrictMode} from 'react';
// import ReactDOM from 'react-dom/client';

// import './index.css';
// // import App from './swapi/App';
// import App from './foodorder/App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

//food order
// import React from 'react';
// import ReactDOM from 'react-dom';

// import './index.css';
// import App from './foodorder/App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// shopping
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './shopping/App';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
// //차후 추가
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './shopping/redux/store';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>,
// );
