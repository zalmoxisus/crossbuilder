import { CALL_IN_BG } from '../constants/ActionTypes';

/**
 * Send an action to be called in background script by its function name.
 * Can be used from window, popup or content script.
 *
 * @param {String} actionFN Action function name to be called in background after rehydratation
 * @returns {Object} Returns action.
 * @example
 *
 * bg('increment')
 */

export function bg(actionFN) {
  return { type: CALL_IN_BG, fN: actionFN };
}
