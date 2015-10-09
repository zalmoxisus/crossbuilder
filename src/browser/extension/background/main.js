import configureStore from '../../../app/store/configureStore';
const store = configureStore({counter: {count: 0}}, true);

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
