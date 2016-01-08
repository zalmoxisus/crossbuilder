import {
  INCREMENT_COUNTER, DECREMENT_COUNTER, NOTIFY_SEND, NOTIFY_RECEIVE
} from '../constants/ActionTypes';

export default function counter(state = { count: 0 }, action) {
  if (
    typeof window === 'object' && window.bgBadge &&
    (action.type === NOTIFY_SEND || action.type === NOTIFY_RECEIVE)
  ) {
    window.bgBadge(state.count); return state;
  }

  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, count: state.count + 1 };
    case DECREMENT_COUNTER:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
