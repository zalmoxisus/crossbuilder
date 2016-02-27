import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './App';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    tabId: PropTypes.number.isRequired,
  };

  render() {
    const { store, tabId } = this.props;
    return (
      <Provider store={store} tabId={tabId}>
        <App />
      </Provider>
    );
  }
}
