import React from 'react';
import { Provider } from 'react-redux';
import Root from '../../../app/containers/Root';
import configureStore from '../../../app/store/configureStore';

const store = configureStore();

window.addEventListener('load', () => {
  let injectDiv = document.createElement('div');
  injectDiv.style.margin = '0 auto';
  injectDiv.style.width = '200px';
  injectDiv.style.border = '1px solid #ccc';
  injectDiv.style.textAlign = 'center';
  document.body.appendChild(injectDiv);

  React.render(
    <Provider store={store}>
      {() => <Root />}
    </Provider>,
    injectDiv
  );
});
