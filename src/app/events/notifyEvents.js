import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';
import { REHYDRATE_COMPLETE } from 'redux-persist/constants';
import { updateBadge } from '../actions/extension';

let events = [];
if (chrome.browserAction) {
  events = [
    {
      catch: [INCREMENT_COUNTER, DECREMENT_COUNTER, REHYDRATE_COMPLETE],
      dispatch: updateBadge
    }
  ];
}

export default events;
