//before useMemo///////////////////////////////////////
// import { useState } from "react";

// const getAverage = (numbers) => {
//   console.log("평균값 계산중...");
//   if (numbers.length === 0) return 0;
//   const sum = numbers.reduce((a, b) => a + b);
//   return sum / numbers.length;
// };

// const Average = () => {
//   const [list, setList] = useState([]);
//   const [number, setNumber] = useState("");

//   const onChange = (e) => {
//     setNumber(e.target.value);
//   };
//   const onInsert = (e) => {
//     const nextList = list.concat(parseInt(number));
//     setList(nextList);
//     setNumber("");
//   };

//   return (
//     <div>
//       <input value={number} onChange={onChange} />
//       <button onClick={onInsert}>Reg</button>
//       <ul>
//         {list.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ul>
//       <div>
//         <b>Average</b>
//         {getAverage(list)}
//       </div>
//     </div>
//   );
// };

// export default Average;

//인풋에 값이 입력될때마다 렌더링이되어 자원낭비 useMemo로 특정 값이 바뀌었을때만 연산을 실행
//원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식

////applying useMemo////////////////////////////////////////////////
// // CHANGE
// import { useState, useMemo } from 'react';

// const getAverage = numbers => {
//   console.log('평균값 계산중...');
//   if (numbers.length === 0) return 0;
//   const sum = numbers.reduce((a, b) => a + b);
//   return sum / numbers.length;
// };

// const Average = () => {
//   const [list, setList] = useState([]);
//   const [number, setNumber] = useState('');

//   const onChange = e => {
//     setNumber(e.target.value);
//   };
//   const onInsert = e => {
//     const nextList = list.concat(parseInt(number));
//     setList(nextList);
//     setNumber('');
//   };

//   // CHANGE
//   const avg = useMemo(() => getAverage(list), [list]);

//   return (
//     <div>
//       <input value={number} onChange={onChange} />
//       <button onClick={onInsert}>Reg</button>
//       <ul>
//         {list.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ul>
//       <div>
//         <b>평균값: </b>
//         {/* CHANGE */}
//         {avg}
//       </div>
//     </div>
//   );
// };

// export default Average;

//useCallback////////////////////////////////////////////
// // CHANGE
// import { useState, useMemo, useCallback } from 'react';

// const getAverage = numbers => {
//   console.log('평균값 계산중...');
//   if (numbers.length === 0) return 0;
//   const sum = numbers.reduce((a, b) => a + b);
//   return sum / numbers.length;
// };

// const Average = () => {
//   const [list, setList] = useState([]);
//   const [number, setNumber] = useState('');

//   // CHANGE
//   const onChange = useCallback(e => {
//     setNumber(e.target.value);
//   }, []); //컴포넌트가 처음 렌더링 될때만 함수 생성

//   // CHANGE
//   const onInsert = useCallback(() => {
//     const nextList = list.concat(parseInt(number));
//     setList(nextList);
//     setNumber('');
//   }, [number, list]); //number 혹은 list가 바뀌었을 때만 함수 생성

//   const avg = useMemo(() => getAverage(list), [list]);

//   return (
//     <div>
//       <input value={number} onChange={onChange} />
//       <button onClick={onInsert}>Reg</button>
//       <ul>
//         {list.map((value, index) => (
//           <li key={index}>{value}</li>
//         ))}
//       </ul>
//       <div>
//         <b>평균값: </b>
//         {avg}
//       </div>
//     </div>
//   );
// };

// export default Average;

//useRef
// CHANGE
import { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
  console.log('평균값 계산중...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  // CHANGE
  const inputEl = useRef(null);

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []); //컴포넌트가 처음 렌더링 될때만 함수 생성

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    // CHANGE
    inputEl.current.focus();
  }, [number, list]); //number 혹은 list가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      {/* CHANGE */}
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>Reg</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값: </b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
