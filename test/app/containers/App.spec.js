import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from '../../../src/app/containers/App';
// import configureStore from '../../../src/app/store/configureStore';
import counter from '../../../src/app/reducers/counter';

function configureStore(initialState) {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  return createStoreWithMiddleware(combineReducers({ counter }), initialState);
}

describe('containers', () => {

  describe('App', () => {
    it('should display initial count', () => {
      const wrapper = mount(<Provider store={ configureStore() }><App /></Provider>);
      expect(wrapper.find('span.counter').text()).toBe('0');
    });

    [
      { title: 'should display updated count after increment button click', result: '1' },
      { title: 'should display updated count after decrement button click', result: '-1' },
      { title: 'shouldnt change if even and if odd button clicked', result: '0' },
      { idx: 2, title: 'should change if odd and if odd button clicked',
        value: { counter: { count: 1 } }, result: '2' }
    ]
    .forEach((rule, idx) => {
      it(rule.title, () => {
        const wrapper = mount(<Provider store={ configureStore(rule.value) }><App /></Provider>);
        wrapper.find('button').at(rule.idx || idx).simulate('click');
        expect(wrapper.find('span.counter').text()).toEqual(rule.result);
      });
    });

  });
});
