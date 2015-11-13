import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';
import { REHYDRATE_COMPLETE } from 'redux-persist/constants';
import { updateBadge, passNotification } from '../actions/extension';

const events = [
  {
    catch: [INCREMENT_COUNTER, DECREMENT_COUNTER],
    dispatch: passNotification
  }
];

export default events;
