import React from 'react';

const Counter = ({ increment, incrementIfOdd, incrementAsync, decrement, state }) => (
  <div>
    Clicked: <span className="counter">{state.counter.count}</span> times
    <div className="rule"></div>
    <button className="btn" onClick={increment}>+</button>
    {' '}
    <button className="btn" onClick={decrement}>-</button>
    <div className="rule"></div>
    <button className="btn" onClick={incrementIfOdd}>Increment if odd</button>
    <br />
    <button className="btn" onClick={incrementAsync}>Increment async</button>
  </div>
);

/*
import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, state } = this.props;
    return (
      <div>
        Clicked: <span className="counter">{state.counter.count}</span> times
        <div className="rule"></div>
        <button className="btn" onClick={increment}>+</button>
        {' '}
        <button className="btn" onClick={decrement}>-</button>
        <div className="rule"></div>
        <button className="btn" onClick={incrementIfOdd}>Increment if odd</button>
        <br />
        <button className="btn" onClick={() => incrementAsync()}>Increment async</button>
      </div>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
};
*/

export default Counter;
