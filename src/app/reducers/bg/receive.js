import { REHYDRATE } from 'redux-persist/constants'

export default function extension(state = { command: null, status: null }, action) {
  if (action.key === 'extension' && action.payload.fN && action.payload.status === 'sent') {
    console.info('Received action', action);
    return { ...state, fN: action.payload.fN, status: 'received' };
  }
  else return state;
}
