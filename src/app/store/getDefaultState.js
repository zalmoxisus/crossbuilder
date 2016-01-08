export default function (configure, callback) {
  const initialState = {}; // Add here you initalStore value
  const store = configure(initialState);
  callback(store);
}
