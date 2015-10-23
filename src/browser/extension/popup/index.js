import React from 'react';
import { Provider } from 'react-redux';
import Root from '../../../app/containers/Root';
import configureStore from '../../../app/store/configureStore';

const store = configureStore({counter: { count: 0 }});

React.render(
  <Provider store={store}>
    {() => <Root />}
  </Provider>,
  document.getElementById('root')
);
