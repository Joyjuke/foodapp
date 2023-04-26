import React from 'react';
import {Component} from 'react';
class HistorySample extends Component {
  //뒤로가기
  handleGoBack = () => {
    this.props.history.goBack();
  };

  //홈으로 이동
  handleGoHome = () => {
    this.props.history.push('/');
  };

  componentDidMount() {
    this.unblock = this.props.history.block('Are you really leaving?');
  }

  componentWillUnmount() {
    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>Back</button>
        <button onClick={this.handleGoHome}>Home</button>
      </div>
    );
  }
}

export default HistorySample;
