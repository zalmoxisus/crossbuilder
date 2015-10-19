import React from 'react';
import expect from 'expect';
import Test from 'legit-tests';
import { clickButton } from '../testMixins';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from '../../../src/app/containers/Root';
// import configureStore from '../../../src/app/store/configureStore';
import counter from '../../../src/app/reducers/counter';

function configureStore(initialState) {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  return createStoreWithMiddleware(combineReducers({counter}), initialState);
}

describe('containers', () => {

  describe('App', () => {
    it('should display initial count', () => {
      Test(<Provider store={ configureStore() }>{ () => <App /> }</Provider>)
        .find('p')
        .renderToString(string => {
          expect(string).toMatch(/Clicked: 0 times/);
        });
    });

    [
      { title: 'should display updated count after increment button click', result: /Clicked: 1 times/ },
      { title: 'should display updated count after decrement button click', result: /Clicked: -1 times/ },
      { title: 'shouldnt change if even and if odd button clicked', result: /Clicked: 0 times/ },
      { idx: 2, title: 'should change if odd and if odd button clicked', value: { counter: { count: 1 } }, result: /Clicked: 2 times/ }
    ]
    .forEach((rule, idx) => {
      it(rule.title, () => {
        Test(<Provider store={ configureStore(rule.value) }>{ () => <App /> }</Provider>)
          .mixin({clickButton: clickButton})
          .clickButton(rule.idx || idx)
          .renderToString(string => {
            expect(string).toMatch(rule.result);
          });
      });
    });

  });
});
