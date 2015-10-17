import webdriver from 'selenium-webdriver';
import expect from 'expect';
import { check, doBefore, doAfter } from '../shared/functions';
import * as Test from '../shared/tests';
import { injectClassName } from '../config';

describe('inject page', function() {

  before(function(done) {
    doBefore.call(this, done, () => {
      return this.driver.get('https://github.com');
    });
  });

  after(doAfter);

  it('should open Github', function(done) {
    this.driver.getTitle().then((title) => {
      expect(title).toEqual('GitHub · Where software is built');
      done();
    });
  });

  it('should render inject app', function(done) {
    this.timeout(8000);
    this.driver.wait(() =>
        this.driver.findElements(webdriver.By.className(injectClassName))
          .then(elems => elems.length > 0)
      , 15000, 'Inject app not found')
      .then(() => done());
  });

  Test.hasValue(0, 'div', injectClassName);

});

