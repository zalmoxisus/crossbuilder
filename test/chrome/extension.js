import path from 'path';
import webdriver from 'selenium-webdriver';
import expect from 'expect';
import { doBefore, doAfter } from '../shared/functions';
import * as Test from '../shared/tests';
import { extensionName, appTitle, injectClassName } from '../config';

let extensionId;

describe('Chrome extension', function () {
  this.timeout(15000);

  before(function (done) {
    doBefore.call(this, done, () => {
      return this.driver.get('chrome://extensions-frame').then(() => {
        this.driver.findElements(webdriver.By.xpath(
          '//div[contains(@class,"extension-list-item-wrapper") and ' +
          './/h2[contains(text(), "' + extensionName + '")]]'
        )).then(elems =>
          elems[0].getAttribute('id')
        ).then(id => {
          extensionId = id;
          this.driver.get(`chrome-extension://${id}/window.html`);
        });
      });
    }, path.resolve('build/extension'));
  });

  after(doAfter);

  describe('window', function () {
    Test.hasTitle(appTitle);
    Test.hasValue(0);
    Test.clickButtons(0);
  });

  describe('popup', function () {
    it('should open popup', function (done) {
      this.driver.get(`chrome-extension://${extensionId}/popup.html`).then(() => {
        this.driver.getCurrentUrl().then((url) => {
          expect(url).toBe(`chrome-extension://${extensionId}/popup.html`);
          done();
        });
      });
    });

    Test.hasTitle(appTitle);
    Test.hasValue(1);
    Test.clickButtons(1);
  });

  describe('inject page', function () {
    it('should open Github', function (done) {
      this.driver.get('https://github.com').then(() => {
        this.driver.getTitle().then((title) => {
          expect(title).toEqual('GitHub · Where software is built');
          done();
        });
      });
    });

    it('should render inject app', function (done) {
      this.driver.wait(() =>
          this.driver.findElements(webdriver.By.className(injectClassName))
            .then(elems => elems.length > 0)
        , 7000, 'Inject app not found')
        .then(() => done());
    });

    Test.hasValue(2, injectClassName);
    Test.clickButtons(2, injectClassName);
  });

});
