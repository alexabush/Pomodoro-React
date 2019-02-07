import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
  render() {
    return (
      <div className="Timer">
        <div>
          <h3>Session</h3>
          {this.props.time}
          <div>
            start/pause
            reset
          </div>
        </div>
      </div>
    );
  }
}

Timer.propTypes = {
  time: PropTypes.number,
  startPause: PropTypes.func,
  refresh: PropTypes.func
};

export default Timer;
