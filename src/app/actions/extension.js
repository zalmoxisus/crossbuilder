import { sendMessage } from 'crossmessaging';
import { NOTIFY_SEND, NOTIFY_RECEIVE } from '../constants/ActionTypes';

export function sendNotification(action) {
  sendMessage({ name: 'redux-notify', action: action });
  return { type: NOTIFY_SEND };
}

export function receiveNotification(action) {
  return dispatch => {
    dispatch(action);
    dispatch({ type: NOTIFY_RECEIVE });
  };
}
