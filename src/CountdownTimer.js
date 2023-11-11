import React, { Component } from 'react';
import './App.css';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 500, // Initial time in seconds (5 minutes)
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.updateTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateTimer = () => {
    if (this.state.time > 0) {
      this.setState((prevState) => ({
        time: prevState.time - 1,
      }));
    } else {
      clearInterval(this.timer);
    }
  };

  formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  render() {
    return (
      <div className="countdown-timer">
        <h1>Countdown Timer</h1>
        <div className="timer">{this.formatTime(this.state.time)}</div>
      </div>
    );
  }
}

export default CountdownTimer;
