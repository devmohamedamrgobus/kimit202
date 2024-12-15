import React, { Component } from 'react';

class TimerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
  }

  componentDidMount() {
    // Start a timer when the component mounts
    this.timerID = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    // Clean up the timer before the component is removed
    clearInterval(this.timerID);
    console.log('Timer stopped and component unmounted');
  }

  render() {
    return (
      <div>
        <h1>Time: {this.state.time} seconds</h1>
      </div>
    );
  }
}

export default TimerComponent;
