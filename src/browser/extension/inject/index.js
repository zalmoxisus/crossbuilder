import configureStore from '../../../app/store/configureStore';

const store = configureStore({counter: {count: 0}}, false, () => injectContent(store.getState()));

const injectContent = (state) => {
  let injectDiv = document.createElement('div');
  injectDiv.style.width = '100px'; injectDiv.style.margin = '5px auto'; injectDiv.style.backgroundColor = 'red'; injectDiv.style.color = 'white'; injectDiv.style.textAlign = 'center';  injectDiv.style.cursor = 'pointer';
  injectDiv.innerText = 'Clicked: ' + state.counter.count;
  injectDiv.addEventListener("click",  function() { injectDiv.parentNode.removeChild(injectDiv); injectContent(store.getState()); });
  document.body.appendChild(injectDiv);
};
