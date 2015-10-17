import webdriver from 'selenium-webdriver';
import expect from 'expect';
import { check, doBefore, doAfter } from '../shared/functions';
import * as Test from '../shared/tests';
import { extensionName, appTitle } from '../config';

let extensionId;

describe('window and popup pages', function() {

  before(function(done) {
    doBefore.call(this, done, () => {
      return this.driver.get('chrome://extensions-frame').then(() => {
        this.driver.findElements(webdriver.By.xpath(
          '//div[contains(@class,"extension-list-item-wrapper") and .//h2[contains(text(), "' + extensionName + '")]]'
        )).then(elems =>
          elems[0].getAttribute('id')
        ).then(id => {
          extensionId = id;
          this.driver.get(`chrome-extension://${id}/window.html`);
        });
      });
    });
  });

  after(doAfter);

  describe('window', function() {
    Test.hasTitle(appTitle);
    Test.hasValue(0);
  });

  describe('popup', function() {
    it('should open popup', function(done) {
      this.driver.get(`chrome-extension://${extensionId}/popup.html`).then(() => {
        this.driver.getCurrentUrl().then((url) => {
          expect(url).toBe(`chrome-extension://${extensionId}/popup.html`);
          done();
        });
      });
    });

    Test.hasTitle(appTitle);
    Test.hasValue(0);
  });

});
