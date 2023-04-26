//1
// import Counter from '../components/Counter';

// const CounterContainer = () => {
//   return <Counter />;
// };

// export default CounterContainer;

//2
// //컴포넌트를 리덕스와 연동하기 위한 connect함수를 사용
// //사용법은 connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
// import {connect} from 'react-redux';
// import Counter from '../components/Counter';

// const CounterContainer = ({number, increase, decrease}) => {
//   return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
// };

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });
// const mapDistpatchToProps = (dispatch) => ({
//   //임시 함수
//   increase: () => {
//     console.log('increase');
//   },
//   decrease: () => {
//     console.log('decrease');
//   },
// });
// export default connect(mapStateToProps, mapDistpatchToProps)(CounterContainer);

//3
import {connect} from 'react-redux';
import Counter from '../components/Counter';
// CHANGE
import {increase, decrease} from '../modules/counter';

const CounterContainer = ({number, increase, decrease}) => {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
};
//3-1
// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });
// const mapDistpatchToProps = (dispatch) => ({
//   // CHANGE
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });
// export default connect(mapStateToProps, mapDistpatchToProps)(CounterContainer);

//3-2 이렇게 써도 됨(두번째 파라미터를 객체 형태로 넣어줌)
const mapStateToProps = (state) => ({
  number: state.counter.number,
});
// const mapDistpatchToProps = (dispatch) => ({
//   // CHANGE
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });
export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  {increase, decrease},
)(CounterContainer);
