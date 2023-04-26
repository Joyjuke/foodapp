//1.
// import React from 'react';
// import './App.css';

// const App = () => {
//   return <div>Todo App 만들기!</div>;
// };

// export default App;

//2.
// import React from 'react';
// import TodoTemplate from './components/TodoTemplate';
// const App = () => {
//   return <TodoTemplate>Todo App 만들기!</TodoTemplate>;
// };

// export default App;

//3.
// import TodoInsert from './components/TodoInsert';
// import TodoTemplate from './components/TodoTemplate';
// const App = () => {
//   return (
//     <TodoTemplate>
//       <TodoInsert />
//     </TodoTemplate>
//   );
// };

// export default App;

//4.
// import TodoInsert from './components/TodoInsert';
// import TodoList from './components/TodoList';
// import TodoTemplate from './components/TodoTemplate';
// const App = () => {
//   return (
//     <TodoTemplate>
//       <TodoInsert />
//       <TodoList />
//     </TodoTemplate>
//   );
// };

// export default App;

//5.
// import {useState} from 'react';
// import TodoInsert from './components/TodoInsert';
// import TodoList from './components/TodoList';
// import TodoTemplate from './components/TodoTemplate';
// const App = () => {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       text: '리액트의 기초 알아보기',
//       checked: true,
//     },
//     {
//       id: 2,
//       text: '컴포넌트 스타일링 해보기',
//       checked: true,
//     },
//     {
//       id: 3,
//       text: '일정 관리 앱 만들어 보기',
//       checked: false,
//     },
//   ]);

//   return (
//     <TodoTemplate>
//       <TodoInsert />
//       <TodoList todos={todos} />
//     </TodoTemplate>
//   );
// };

// export default App;

//6
// import {useState, useRef, useCallback} from 'react';
// import TodoInsert from './components/TodoInsert';
// import TodoList from './components/TodoList';
// import TodoTemplate from './components/TodoTemplate';

// const App = () => {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       text: 'eating',
//       checked: true,
//     },
//     {
//       id: 2,
//       text: 'sleeping',
//       checked: true,
//     },
//     {
//       id: 3,
//       text: 'exercising',
//       checked: false,
//     },
//   ]);

//   //고윳값으로 사용될 id: id값은 렌더링되는 정보가 아니기 때문에 리렌더링될 필요가 없어 단순히 새로운 항목을 만들 때 참조되는 값
//   //ref를 사용하여 변수 담기
//   const nextId = useRef(4);

//   //컴포넌튼의 성능을 아낄  수 있도록 useCallback으로 감쌈
//   const onInsert = useCallback(
//     (text) => {
//       const todo = {
//         id: nextId.current,
//         text,
//         checked: false,
//       };
//       setTodos(todos.concat(todo));
//       nextId.current += 1; //nextId 1씩 더하기
//     },
//     [todos],
//   );
//   return (
//     <TodoTemplate>
//       <TodoInsert onInsert={onInsert} />
//       <TodoList todos={todos} />
//     </TodoTemplate>
//   );
// };

// export default App;

//7-onRemove함수
// import {useState, useRef, useCallback} from 'react';
// import TodoTemplate from './components/TodoTemplate';
// import TodoInsert from './components/TodoInsert';
// import TodoList from './components/TodoList';

// const App = () => {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       text: 'eating',
//       checked: true,
//     },
//     {
//       id: 2,
//       text: 'sleeping',
//       checked: true,
//     },
//     {
//       id: 3,
//       text: 'exercising',
//       checked: false,
//     },
//   ]);

//   const nextId = useRef(4);

//   const onInsert = useCallback(
//     (text) => {
//       const todo = {
//         id: nextId.current,
//         text,
//         checked: false,
//       };
//       setTodos(todos.concat(todo));
//       nextId.current += 1; //nextId 1씩 더하기
//     },
//     [todos],
//   );

//   // "CHANGE"
//   const onRemove = useCallback(
//     (id) => {
//       setTodos(todos.filter((todo) => todo.id !== id));
//     },
//     [todos],
//   );

//   return (
//     <TodoTemplate>
//       <TodoInsert onInsert={onInsert} />
//       {/* "CHANGE" */}
//       <TodoList todos={todos} onRemove={onRemove} />
//     </TodoTemplate>
//   );
// };

// export default App;

//8. onToggle로 수정기능
//수정 onToggle 기능 구현///////////////////////////////////////////////////////////////////////////////////
import {useState, useRef, useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'eating',
      checked: true,
    },
    {
      id: 2,
      text: 'sleeping',
      checked: true,
    },
    {
      id: 3,
      text: 'exercising',
      checked: false,
    },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; //nextId 1씩 더하기
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  // "CHANGE"
  const onToggle = useCallback(
    (id) => {
      setTodos(todos.map((todo) => (todo.id === id ? {...todo, checked: !todo.checked} : todo)));
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      {/* "CHANGE" */}
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;

// function createBulkTodos() {
//   const array = [];
//   for (let i = 1; i <= 2500; i++) {
//     array.push({
//       id: i,
//       text: `할 일 ${i}`,
//       checked: false,
//     });
//   }
//   return array;
// }

// function todoReducer(todos, action){
//   switch (action.type) {
//     case 'INSERT': //새로추가 {type: 'INSERT', todo: {id:1, text: 'todo', checked: false}}
//     return todos.concat(action.todo);
//     case 'REMOVE': //제거 {type: 'REMOVE', id: 1}
//     return todos.filter(todo => todo.id !== action.id);
//     case 'TOGGLE': //토글 {type: 'REMOVE', id: 1}
//     return todos.map(todo => todo.id === action.id ? {...todo, checked: !todo.checked}: todo,);
//     default:
//       return todos;
//   }
// }

// const App = () => {
//   const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

//   const nextId = useRef(2501);

//   const onInsert = useCallback((text) => {
//     const todo = {
//       id: nextId.current,
//       text,
//       checked: false,
//     };
//     dispatch({type: "INSERT", todo});
//     nextId.current += 1;
//   }, []);

//   const onRemove = useCallback((id) => {
//     dispatch({type: "REMOVE", id});
//   }, []);

//   const onToggle = useCallback((id) => {
//     dispatch({type: "TOGGLE", id});
//   }, []);

//   return (
//     <TodoTemplate>
//       <TodoInsert onInsert={onInsert} />
//       <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
//     </TodoTemplate>
//   );
// };

// export default App;

//1//////////////////////////////////////////////////////////////////////////////////////
/*
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  return (
    <TodoTemplate><TodoInsert /><TodoList /></TodoTemplate>
    
    )
}

export default App;
*/
