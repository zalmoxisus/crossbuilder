import { sendMessage } from 'crossmessaging';
import { UPDATE_BADGE, NOTIFY } from '../constants/ActionTypes';

export function updateBadge() {
  return (dispatch, getState) => {
    chrome.browserAction.setBadgeText({ text: '' + getState().counter.count });
    dispatch({ type: UPDATE_BADGE });
  };
}

export function passNotification(calleeAction) {
  sendMessage({ name: 'redux-notify', action: calleeAction });
  return { type: NOTIFY };
}
