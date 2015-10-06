import configureStore from '../../../app/store/configureStore';

let store = {};

// Get current state from Background Page
const getState = (store, next) => {
  chrome.runtime.sendMessage({
    action: 'getState'
  }, function (res) {
    if (!res) return console.error('No response from background', chrome.runtime.lastError);
    store = configureStore(res);
    next(res);
  });
};

// Inject content in the page 
const injectContent = (state) => {
  let injectDiv = document.createElement('div');
  injectDiv.style.width = '100px'; injectDiv.style.margin = '5px auto'; injectDiv.style.backgroundColor = 'red'; injectDiv.style.color = 'white'; injectDiv.style.textAlign = 'center';  injectDiv.style.cursor = 'pointer';
  injectDiv.innerText = 'Clicked: ' + state.counter.count;
  injectDiv.addEventListener("click",  function() { injectDiv.parentNode.removeChild(injectDiv); getState(store, injectContent); });
  document.body.appendChild(injectDiv);
};

getState(store, injectContent);
