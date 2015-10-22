import webdriver from 'selenium-webdriver';
import expect from 'expect';

function selectXPath(child, value, container, className) {
  return webdriver.By.xpath(
    '//' + container + '[' + (className ? '@class="' + className + '" and ' : '') + './/span[text()="Clicked: "] and .//span[text()=" times"]]' + child
  );
}

export function hasValue(value, container = 'p', className) {
  it('should contain text "Clicked: ' + value + ' times"', function(done) {
    var el = this.driver.findElement(webdriver.By.className('counter'));
    el.getText().then(function(val) {
      expect(val).toBe(value + '');
      setTimeout(()=>{done();}, 1000);
    });

  });
}
export function hasValueWait(value, container = 'p', className) {
  it('should contain text "Clicked: ' + value + ' times"', function(done) {
    this.driver.wait(() =>
      this.driver.findElements(webdriver.By.className('counter'))
        .then((elems) => elems.length === 1)
      , 30000, 'element with such value doesn\'t exist')
      .then(() => { setTimeout(()=>{done();}, 1000); } );
  });
}

export function hasClickedButton(idx, initialValue, finalValue, container = 'p', className) {
  it('should click button with idx=' + idx, function(done) {
    this.driver.findElement(selectXPath('//button[' + idx + ']', initialValue, container, className))
      .click().then(() => done());
  });
  hasValue(finalValue, container, className);
}

export function clickButtons(initialValue, container = 'p', className) {
  [
    [ 1, initialValue, initialValue + 1 ]
  ].forEach((params) => {
    describe(params[1] + '->' + params[2], function() {
      hasClickedButton(...params, container, className);
    });
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
