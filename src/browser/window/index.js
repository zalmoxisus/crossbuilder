import React from 'react';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import Root from '../../app/containers/Root';
import configureStore from '../../app/store/configureStore';

const store = configureStore({counter: { count: 0 }});

React.render(
  <div>
    <Provider store={store}>
      {() => <Root />}
    </Provider>
    {
      (() => {
        if (__DEVELOPMENT__) {
          return (
            <DebugPanel top right bottom>
              <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>
          );
        }
      })()
    }
  </div>,
  document.getElementById('root')
);
