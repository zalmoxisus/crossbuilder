import React from 'react';
import { render } from 'react-dom';
import Root from 'app/containers/Root';
import configureStore from '../app/store/configureStore';

configureStore(store => {
  render(
    <Root store={store} />,
    document.getElementById('root')
  );
});
