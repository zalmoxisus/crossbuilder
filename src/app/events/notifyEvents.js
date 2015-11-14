import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';
import { sendNotification } from '../actions/extension';

const events = [
  {
    catch: [INCREMENT_COUNTER, DECREMENT_COUNTER],
    dispatch: sendNotification
  }
];

export default events;
