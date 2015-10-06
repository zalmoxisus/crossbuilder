import * as commands from '../constants/BgCommands';

export default function extension(state = { command: null, ts: null }, action) {
  if (commands[action.type]) {
    return { ...state, command: action.type, ts: Date.now() };
  }
  else return state;
}
