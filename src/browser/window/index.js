import React from 'react';
import { render } from 'react-dom';
import Root from 'app/containers/Root';

chrome.runtime.getBackgroundPage(background => {
  render(
    <Root store={background.store} />,
    document.getElementById('root')
  );
});
