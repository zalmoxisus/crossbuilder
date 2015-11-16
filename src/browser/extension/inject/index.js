import React from 'react';
import { render } from 'react-dom';
import Root from 'app/containers/Root';
import configureStore from 'app/store/configureStore';

configureStore(store => {

  window.addEventListener('load', () => {
    let injectDiv = document.createElement('div');
    injectDiv.style.margin = '0 auto';
    injectDiv.style.padding = '10px 0';
    injectDiv.style.width = '210px';
    injectDiv.style.border = '1px solid #ccc';
    injectDiv.style.textAlign = 'center';
    injectDiv.className = 'browser-redux';
    document.body.appendChild(injectDiv);

    render(
      <Root store={store} />,
      injectDiv
    );
  });

});