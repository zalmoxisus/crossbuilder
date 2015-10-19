import React from 'react';
import expect from 'expect';
import Test from 'legit-tests';
import { clickButton } from '../testMixins';
import Counter from '../../../src/app/components/Counter';

const props = {
  state: { counter: { count: 1 } },
  increment: expect.createSpy(),
  decrement: expect.createSpy(),
  incrementIfOdd: expect.createSpy(),
  incrementAsync: expect.createSpy(),
  bg: expect.createSpy()
};

describe('Counter component', () => {

  it('should display count', () => {
    Test(<Counter {...props} />)
      .find('p')
      .renderToString(p => {
        expect(p).toMatch(/Clicked: 1 times/);
      });
  });

  ['increment', 'decrement', 'incrementIfOdd', 'incrementAsync', 'bg']
    .forEach((toBeCalled, idx) => {
      it('first button should call ' + toBeCalled, () => {
        Test(<Counter {...props} />)
          .mixin({ clickButton: clickButton })
          .clickButton(idx)
          .test(() => {
            expect(props[toBeCalled]).toHaveBeenCalled();
          });
      });
    });

});
