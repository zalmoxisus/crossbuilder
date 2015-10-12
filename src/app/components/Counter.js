import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  render() {
    const { increment, incrementIfOdd, incrementAsync, bg, decrement, state } = this.props;
    console.log('%cRender ' + this.constructor.displayName + ' component', 'background: #FFF; color: #2aa198 ', 'state', this.state, 'props', this.props);
    return (
      <p>
        Clicked: {state.counter.count} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        <br />
        <button onClick={incrementIfOdd}>Increment if odd</button>
        <br />
        <button onClick={() => incrementAsync()}>Increment async</button>
        <br />
        <button onClick={() => bg('increment')}>Increment in background</button>
      </p>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  bg: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
};

export default Counter;
