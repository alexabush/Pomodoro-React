import React, { Component } from 'react';
import './App.css';
import Length from './Length'
import Timer from './Timer'
class App extends Component {
  state = {
    time: 10,
    breakLength: 5,
    sessionLength: 25
  }

  setTime = () => {
    this.setState(prev => {
      return {time: sessionLength}
    })
  }

  increaseBreak = () => {
    console.log('click')
  }
  decreaseBreak = () => {
    console.log('click')
  }
  increaseSession = () => {
    console.log('click')
  }
  decreaseSession = () => {
    console.log('click')
  }
  startPauseTimer = () => {
    console.log('click')
  }

  render() {
    return (
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <div>
          <Length title="Break Length" time={} increase={this.increaseBreak} decrease={this.decreaseBreak} />
          <Length title="Session Length" time={} increase={this.increaseSession} decrease={this.decreaseSession} />
        </div>
        <Timer time={this.state.time} />
      </div>
    );
  }
}

export default App;
