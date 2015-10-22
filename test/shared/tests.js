import webdriver from 'selenium-webdriver';
import expect from 'expect';

function selectXPath(child, value, container, className) {
  return webdriver.By.xpath(
    '//' + container + '[' + (className ? '@class="' + className + '" and ' : '') + './/span[text()="Clicked: "] and .//span[text()="' + value + '"] and .//span[text()=" times"]]' + child
  );
}

export function hasValue(value, container = 'p', className) {
  it('should contain text "Clicked: ' + value + ' times"', function(done) {
    this.driver.findElements(selectXPath('', value, container, className))
      .then((elems) => {
        expect(elems.length).toBe(1);
        setTimeout(()=>{done();}, 600);
      });
  });
}
export function hasValueWait(value, container = 'p', className) {
  it('should contain text "Clicked: ' + value + ' times"', function(done) {
    this.driver.wait(() =>
      this.driver.findElements(selectXPath('', value, container, className))
        .then((elems) => elems.length === 1)
      , 30000, 'element with such value doesn\'t exist')
      .then(() => { setTimeout(()=>{done();}, 200); } );
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
    [ 1, initialValue, initialValue + 1 ],
    [ 1, initialValue + 1, initialValue + 2 ]
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
