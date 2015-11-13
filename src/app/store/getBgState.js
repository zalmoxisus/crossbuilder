import { connect } from 'crossmessaging';

export default function(configure, callback) {
  const connection = connect();

  connection.postMessage({ name: 'init' });

  connection.onMessage.addListener((message) => {
    if (message.name === 'init') {
      const store = configure(message.state);
      callback(store);
    }
  });
}
