import webdriver from 'selenium-webdriver';
import expect from 'expect';

export function hasValue(value, container = 'p', className) {
  it('should contain text "Clicked: ' + value + ' times"', function(done) {
    this.driver
      .findElements(webdriver.By.xpath(
        '//' + container + '[' + (className ? '@class="' + className + '" and ' : '') + './/span[text()="Clicked: "] and .//span[text()="' + value + '"] and .//span[text()=" times"]]'
      ))
      .then((elems) => { expect(elems.length).toBe(1); })
      .then(() => done());
  });
}

export function hasTitle(value) {
  it('should have title ' + value, function(done) {
    this.driver.getTitle().then((title) => {
      expect(title).toBe(value);
      done();
    });
  });
}
