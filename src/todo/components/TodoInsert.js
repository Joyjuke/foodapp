//1//////////////////////////////////////////////////////////////////////////////////////

// import {MdAdd} from 'react-icons/md';
// //https://react-icons.netlify.com/#/icons/md
// import './TodoInsert.scss';

// const TodoInsert = () => {
//   return (
//     <form className="TodoInsert">
//       <input placeholder="Todo" />
//       <button type="submit">
//         <MdAdd />
//       </button>
//     </form>
//   );
// };
// export default TodoInsert;

//2/////////////////////////////////////////////////////////
// import {useState, useCallback} from 'react';
// import {MdAdd} from 'react-icons/md';
// import './TodoInsert.scss';

// const TodoInsert = () => {
//   const [value, setValue] = useState('');

//   const onChange = useCallback((e) => {
//     //onchange로 리렌더링될 때마다 함수를 새로 만드는것이 아니라, 한번 함수를 만들고 재사용할 수 있도록 useCallback 사용
//     setValue(e.target.value);
//   }, []);

//   return (
//     <form className="TodoInsert">
//       <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
//       <button type="submit">
//         <MdAdd />
//       </button>
//     </form>
//   );
// };

// export default TodoInsert;

//3///////////////TodoInsert에서 onSubmit이벤트 설정//////////////////////////////////////////////////////////////////////
import {useState, useCallback} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
      //submit 이벤트의 브라우저에서의 새로고침 발생을 방지
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="Todo" value={value} onChange={onChange} />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};
export default TodoInsert;

//3.-onRemove함수
// import { useState, useCallback } from 'react';
// import { MdAdd } from 'react-icons/md';
// // import './TodoTemplate.scss';
// import './TodoInsert.scss';

// const TodoInsert = ({ onInsert }) => {
//   const [value, setValue] = useState('');

//   const onChange = useCallback((e) => {
//     setValue(e.target.value);
//   }, []);

//   const onSubmit = useCallback(
//     (e) => {
//       onInsert(value);
//       setValue(''); //value값 초기화
//       e.preventDefault();
//     },
//     [onInsert, value],
//   );

//   return (
//     <form className="TodoInsert" onSubmit={onSubmit}>
//       <input
//         placeholder="할 일을 입력하세요"
//         value={value}
//         onChange={onChange}
//       />
//       <button type="submit">
//         <MdAdd />
//       </button>
//     </form>
//   );
// };
// export default TodoInsert;

/*import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); //value값 초기화
      e.preventDefault(); //submit 이벤트의 속성자체 새로고침을 방지
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
*/
