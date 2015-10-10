import React from 'react';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

chrome.runtime.getBackgroundPage( background => {
  React.render(
    <DebugPanel top right bottom left >
      <DevTools store={background.store} monitor={LogMonitor} />
    </DebugPanel>,
    document.getElementById('root')
  );
});
