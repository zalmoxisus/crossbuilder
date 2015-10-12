import * as commands from '../../constants/BgCommands';

export default function extension(state = { command: null, status: null }, action) {
  if (commands[action.type]) {
    return { ...state, command: action.type, status: 'sent' };
  }
  else return state;
}
