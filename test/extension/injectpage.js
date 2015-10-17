import webdriver from 'selenium-webdriver';
import expect from 'expect';
import { check, doBefore, doAfter } from '../shared/functions';

describe('inject page (in github.com)', function() {

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
        this.driver.findElements(webdriver.By.className('browser-redux'))
          .then(elems => elems.length > 0)
      , 15000, 'Inject app not found')
      .then(() => done());
  });

  it('should contain text "Clicked: 0 times"', function(done) {
    this.driver
      .findElements(webdriver.By.xpath(
        '//div[@class="browser-redux"][//*[contains(text(), "Clicked:")]][//*[contains(text(), "0")]][//*[contains(text(), "times")]]'
      ))
      .then((elems) => { expect(elems.length).toBe(1); })
      .then(() => done());
  });

});

