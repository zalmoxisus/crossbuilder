function select(state) {
  return state.counter.count;
}

function createBadge(store) {
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
}

export default createBadge;