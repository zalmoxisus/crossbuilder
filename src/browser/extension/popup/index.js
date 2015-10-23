import React from 'react';
import { Provider } from 'react-redux';
import Root from '../../../app/containers/App';
import configureStore from '../../../app/store/configureStore';

configureStore(store => {

  React.render(
    <Provider store={store}>
      {() => <Root />}
    </Provider>,
    document.getElementById('root')
  );

});