import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/ActionTypes';

export default function counter(state = { count: 0 }, action) {
  let newState;
  switch (action.type) {
    case INCREMENT_COUNTER:
      newState = { ...state, count: state.count + 1 }; break;
    case DECREMENT_COUNTER:
      newState = { ...state, count: state.count - 1 }; break;
    default:
      return state;
  }
  if (window.bgBadge) window.bgBadge(newState.count);
  return newState;
}
