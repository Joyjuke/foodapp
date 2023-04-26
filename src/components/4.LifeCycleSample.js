import {Component} from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; //ref를 설정할 부분

  //컴포넌트 생성자 메서드, 컴포넌트 만들 때 처음 실행, 초기 state를 정함
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  //prop로 받아 온 값을 state에 동기호 컴포넌트가 마운트될 때와 업데이트될 때 호출됨
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return {color: nextProps.color};
    }
    return null;
  }

  //컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행. 이벤트 및 비동기 작업 처리
  componentDidMount() {
    console.log('componentDidMount');
  }

  //props 또는 state를 변경시 리렌더링을 시작할지 여부를 지정, true/false 반환 기본적으로 true, false면 업데이트 중지
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    //숫자의 마지막 자리가 4면 리렌더링하지 않는다.
    return nextState.number % 10 !== 4;
  }

  //componentDOM제거
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  //업데이트하기 직전의 값을 참고할 일이 있을 때 활용
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  //리렌더링을 완료한 후 실행, 업데이트가 끝난 직후로 DOM관련 처리 가능
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }

  //이벤트 설정이 아닌곳에서 setState를 사용하거나 브라우저의 DOM에 접근하면 안됨. DOM정보를 가져오거나 state에 변화를 줄 때는 componenetDidMount에서 처리
  render() {
    console.log('render');

    const style = {
      color: this.props.color,
    };

    return (
      //에러처리 전
      // <div>
      //   <h1 style={style} ref={(ref) => (this.myRef = ref)}>
      //     {this.state.number}
      //   </h1>
      //   <p>color: {this.state.color}</p>
      //   <button onClick={this.handleClick}>더하기</button>
      // </div>
      //에러처리 후
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
