import { INCREMENT_IN_BG } from '../constants/BgCommands';

export function incrementBG() {
  return { type: INCREMENT_IN_BG };
}
