import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Length extends Component {
  render() {
    return (
      <div className="Length">
        <h3>{this.props.title}</h3>
        <div>
          up
          {this.props.time}
          down
        </div>
      </div>
    );
  }
}

Length.propTypes = {
  title: PropTypes.string,
  time: PropTypes.number,
  increase: PropTypes.func,
  decrease: PropTypes.func
};

export default Length;
