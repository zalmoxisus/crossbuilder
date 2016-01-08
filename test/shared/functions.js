import webdriver from 'selenium-webdriver';

export function doBefore(done, action, load, port = 9515, browser = 'chrome') {
  this.driver = new webdriver.Builder()
    .usingServer(`http://localhost:${port}`)
    .withCapabilities({
      chromeOptions: {
        args: [`load-extension=${load}`]
      }
    })
    .forBrowser(browser)
    .build();
  action().then(() => {
    setTimeout(done, 3000);
  });
}

export function doAfter(done) {
  this.driver.quit().then(done);
}
