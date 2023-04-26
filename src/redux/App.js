// import Counter from './components/Counter';
import CounterContainer from './containers/CounterContainer';
import Todos from './components/Todos';
import TodosContainer from './containers/TodosContainer';

const App = () => {
  return (
    <div>
      {/* 1 */}
      {/* <Counter number={0} />; */}
      {/* 2 */}
      <CounterContainer />
      <hr />
      {/* <Todos /> */}
      <TodosContainer />
    </div>
  );
};

export default App;
