import { connect } from 'crossmessaging';
import { receiveNotification } from '../actions/extension';

export default function(configure, callback) {
  let store;
  const connection = connect(true);

  connection.postMessage({ name: 'init' });

  connection.onMessage.addListener((message) => {
    if (message.name === 'init') {
      store = configure(message.state);
      callback(store);
    } else if (message.name === 'redux-notify' && message.action && store) {
      store.dispatch(receiveNotification(message.action));
    }
  });
}
