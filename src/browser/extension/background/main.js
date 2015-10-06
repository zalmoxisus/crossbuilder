import configureStore from '../../../app/store/configureStore';

const store = configureStore({counter: {count: 0}}, true);

// Message listener

chrome.runtime.onMessage.addListener(
  function (req, sender, sendResponse) {

    // Update state
    if (req.action === 'updateState') {
      store.dispatch({
        type: req.type,
        state: req.state
      });
    }

    // Send current state
    if (req.action === 'getState') {
      sendResponse(store.getState());
    }

  });

// Badge

function select(state) {
  return state.counter.count;
}

let currentValue;
function handleChange() {
  let previousValue = currentValue;
  currentValue = select(store.getState());

  if (previousValue !== currentValue) {
    chrome.browserAction.setBadgeText({text: '' + currentValue});
  }
}

let unsubscribe = store.subscribe(handleChange);
handleChange();
