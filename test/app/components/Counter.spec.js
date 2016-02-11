import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import Counter from '../../../src/app/components/Counter';

const props = {
  state: { counter: { count: 1 } },
  increment: expect.createSpy(),
  decrement: expect.createSpy(),
  incrementIfOdd: expect.createSpy(),
  incrementAsync: expect.createSpy()
};

describe('Counter component', () => {
  it('should display count', () => {
    const wrapper = mount(<Counter {...props} />);
    expect(wrapper.find('span.counter').text()).toBe('1');
  });

  ['increment', 'decrement', 'incrementIfOdd', 'incrementAsync']
    .forEach((toBeCalled, idx) => {
      it((idx + 1) + ' button should call ' + toBeCalled, () => {
        mount(<Counter {...props} />).find('button').at(idx).simulate('click');
        expect(props[toBeCalled]).toHaveBeenCalled();
      });
    });
});
