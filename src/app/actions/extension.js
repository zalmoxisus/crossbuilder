import { sendMessage } from 'crossmessaging';
import { NOTIFY } from '../constants/ActionTypes';

export function passNotification(calleeAction) {
  sendMessage({ name: 'redux-notify', action: calleeAction });
  return { type: NOTIFY };
}
