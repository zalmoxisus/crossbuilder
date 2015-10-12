import { REHYDRATE } from 'redux-persist/constants'

export default function extension(state = { command: null, status: null }, action) {
  if (action.key === 'extension' && action.payload.command && action.payload.status === 'sent') {
    console.info('Command', action);
    return { ...state, command: action.type, status: 'received' };
  }
  else return state;
}
