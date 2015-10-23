import webdriver from 'selenium-webdriver';

export function check(done, func) {
  try {
    func();
  } catch (ex) {
    done(ex);
  }
}

export function doBefore(done, action, load = './build/extension', port = 9515, browser = 'chrome', timeout = 10000) {
  this.timeout(timeout);
  this.driver = new webdriver.Builder()
    .usingServer(`http://localhost:${port}`)
    .withCapabilities({
      chromeOptions: {
        args: [ `load-extension=${load}` ]
      }
    })
    .forBrowser(browser)
    .build();
  console.warn(this.driver);
  action().then(() => done());
}

export function doAfter(done, timeout = 20000) {
  this.timeout(timeout);
  this.driver.quit().then(done);
}
