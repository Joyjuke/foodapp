const Counter = ({number, onIncrease, onDecrease}) => {
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;

// import React, {Component} from 'react';
// import Value from './Value';
// import Control from './Control';
// import {connect} from 'react-redux';
// //import { connect, bindActionCreators } from "react-redux";
// import * as actions from '../actions';

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.setRandomColor = this.setRandomColor.bind(this);
//   }
//   setRandomColor() {
//     const color = [
//       Math.floor(Math.random() * 55 + 200),
//       Math.floor(Math.random() * 55 + 200),
//       Math.floor(Math.random() * 55 + 200),
//     ];
//     this.props.handleSetColor(color);
//   }
//   render() {
//     const color = this.props.color;
//     const style = {
//       background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
//     };
//     return (
//       <div style={style}>
//         <Value number={this.props.number} />
//         <Control
//           onPlus={this.props.handleIncrement}
//           onSubtract={this.props.handleDecrement}
//           onRandomizeColor={this.setRandomColor}
//         />
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     number: state.counter.number,
//     color: state.ui.color,
//   };
// };

// const mapDistpatchToProps = (dispatch) => {
//   //  return bindActionCreators(actions, dispatch);
//   return {
//     handleIncrement: () => {
//       dispatch(actions.increment());
//     },
//     handleDecrement: () => {
//       dispatch(actions.decrement());
//     },
//     handleSetColor: (color) => {
//       dispatch(actions.setColor(color));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDistpatchToProps)(Counter); //connect 또다른 함수를 반환한고 파라미터에 Counter를 넣어줌
