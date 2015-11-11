import { UPDATE_BADGE } from '../constants/ActionTypes';

export function updateBadge() {
  return (dispatch, getState) => {
    chrome.browserAction.setBadgeText({ text: '' + getState().counter.count });
    dispatch({ type: UPDATE_BADGE });
  };
}
