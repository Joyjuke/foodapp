//1.
// import {MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline} from 'react-icons/md';
// import './TodoListItem.scss';

// const TodoListItem = () => {
//   return (
//     <div className="TodoListItem">
//       <div className="checkbox">
//         <MdCheckBoxOutlineBlank />
//         <div className="text">할 일</div>
//       </div>
//       <div className="remove">
//         <MdRemoveCircleOutline />
//       </div>
//     </div>
//   );
// };

// export default TodoListItem;

// 2.
// import {MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline} from 'react-icons/md';
// import cn from 'classnames';
// import './TodoListItem.scss';

// const TodoListItem = ({todo}) => {
//   const {text, checked} = todo;

//   return (
//     <div className="TodoListItem">
//       <div className={cn('checkbox', {checked})}>
//         {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
//         <div className="text">{text}</div>
//       </div>
//       <div className="remove">
//         <MdRemoveCircleOutline />
//       </div>
//     </div>
//   );
// };
// export default TodoListItem;

//3
// import React from 'react';
// import {MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline} from 'react-icons/md';
// import cn from 'classnames';
// import './TodoListItem.scss';

// // "CHANGE"
// const TodoListItem = ({todo, onRemove}) => {
//   // "CHANGE"
//   const {id, text, checked} = todo;
//   return (
//     <div className="TodoListItem">
//       <div className={cn('checkbox', {checked})}>
//         {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
//         <div className="text">{text}</div>
//       </div>
//       {/* "CHANGE" */}
//       <div className="remove" onClick={() => onRemove(id)}>
//         <MdRemoveCircleOutline />
//       </div>
//     </div>
//   );
// };

// export default TodoListItem;

//4
import React from 'react';
import {MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

// "CHANGE"
const TodoListItem = ({todo, onRemove, onToggle}) => {
  const {id, text, checked} = todo;
  return (
    <div className="TodoListItem">
      {/* "CHANGE" */}
      <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;

// import React from 'react';
// import {
//   MdCheckBoxOutlineBlank,
//   MdCheckBox,
//   MdRemoveCircleOutline,
// } from 'react-icons/md';
// import cn from 'classnames';
// import './TodoListItem.scss';

// const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
//   const { id, text, checked } = todo;
//   return (
//     <div className="TodoListItem-virtualized" style={style}>
//       <div className="TodoListItem">
//         <div
//           className={cn('checkbox', { checked })}
//           onClick={() => onToggle(id)}
//         >
//           {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
//           <div className="text">{text}</div>
//         </div>
//         <div className="remove" onClick={() => onRemove(id)}>
//           <MdRemoveCircleOutline />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default React.memo(TodoListItem);

//1//////////////////////////////////////////////////////////////
/*
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = () => {
  return (
    <div className='TodoListItem'>
      <div className='checkbox'>
        <MdCheckBoxOutlineBlank />
        <div className='text'>Things to do</div>
      </div>
      <div className='remove'>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
*/

//2/////////////////////////////////////////////////////////////
// import {
//   MdCheckBoxOutlineBlank,
//   MdCheckBox,
//   MdRemoveCircleOutline,
// } from 'react-icons/md';
// import cn from 'classnames'; //조건부 스타일링
// import './TodoListItem.scss';

// const TodoListItem = ({todo}) => {
//   const {text, checked} = todo;
//   return (
//     <div className='TodoListItem'>
//       <div className={cn('checkbox',{checked})}>
//         {checked? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
//         <div className='text'>{text}</div>
//       </div>
//       <div className='remove'>
//         <MdRemoveCircleOutline />
//       </div>
//     </div>
//   );
// };

//지우기 기능 구현
//const TodoListItem = ({ todo, onRemove }) => {
//toggle 수정
// const TodoListItem = ({ todo, onRemove, onToggle }) => {
//   const { id, text, checked } = todo;
//   return (
//     <div className="TodoListItem">
//       {/* <div className={cn('checkbox', { checked })}> */}
//       {/* toggle 수정 */}
//       <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
//         {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
//         <div className="text">{text}</div>
//       </div>
//       <div className="remove" onClick={() => onRemove(id)}>
//         <MdRemoveCircleOutline />
//       </div>
//     </div>
//   );
// };

// export default TodoListItem;
