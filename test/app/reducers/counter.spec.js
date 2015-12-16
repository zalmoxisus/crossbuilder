import expect from 'expect';
import counter from '../../../src/app/reducers/counter';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../../../src/app/constants/ActionTypes';

describe('reducers', () => {
  describe('counter', () => {
    it('should handle initial state', () => {
      expect(counter(undefined, {})).toEqual({ count: 0 });
    });

    it('should handle INCREMENT_COUNTER', () => {
      expect(counter({ count: 1 }, { type: INCREMENT_COUNTER })).toEqual({ count: 2 });
    });

    it('should handle DECREMENT_COUNTER', () => {
      expect(counter({ count: 1 }, { type: DECREMENT_COUNTER })).toEqual({ count: 0 });
    });

    it('should handle unknown action type', () => {
      expect(counter({ count: 1 }, { type: 'unknown' })).toEqual({ count: 1 });
    });
  });
});
