# Browser App and Extension Boilerplate using Redux Actions

Simple boilerplate and library for building Chrome apps and cross-browser extensions (support for Firefox and Safari will come later) that use Redux actions instead of messaging.

![Demo](demo.gif)

Redux states are synced between background, inject page, app window, extension popup and badge.

The developing is the same as for the web apps with React and Redux, just use the `src/app` boilerplate. If you need some extension or Chrome app customizations, use `src/browser/` boilerplates.

The app example is edited from [Redux Counter example](https://github.com/rackt/redux/tree/master/examples/counter) using [Redux Persist](https://github.com/rt2zz/redux-persist), based on [React Chrome Extension Boilerplate](https://github.com/jhen0409/react-chrome-extension-boilerplate).

## Structure

- [browser-redux-sync](https://github.com/zalmoxisus/browser-redux-sync): states syncing module.
- [browser-redux-bg](https://github.com/zalmoxisus/browser-redux-bg): messaging module - send redux actions (from popup, windows or inject pages) to be called in the background by their function name. 
- `src/app`: React cross-browser application.
- `src/browser`: sources for the extension and Chrome app.
- `test/app`: tests for Redux actions and reducers, and for React components (using [Legit Tests](https://github.com/Legitcode/tests)).
- `test/chrome`: tests for Chrome app and extension (using [chromedriver](https://www.npmjs.com/package/chromedriver), [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)).

## Included

 - [react](https://github.com/facebook/react)
 - [redux](https://github.com/rackt/redux)
 - [react-redux](https://github.com/gaearon/react-redux)
 - [redux-persist](https://github.com/rt2zz/redux-persist)
 - [redux-devtools](https://github.com/gaearon/redux-devtools)
 - [redux-logger](https://github.com/fcomb/redux-logger)
 - [redbox-react](https://github.com/KeywordBrain/redbox-react)
 - [react-chrome-extension-boilerplate](https://github.com/jhen0409/react-chrome-extension-boilerplate)
 - [webpack](https://github.com/webpack/webpack)
 - [react-transform-hmr](https://github.com/gaearon/react-transform-hmr)
 - [react-transform-catch-errors](https://github.com/gaearon/react-transform-catch-errors)
 - [babel](https://github.com/babel/babel)
 - [babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform)
 - [gulp](https://github.com/gulpjs/gulp)

## Installation

```bash
# required node.js/io.js
# clone it
npm install
```

## Development

```bash
# build files to './dev'
# watch files change
# start WebpackDevServer
npm run dev
```

You can load unpacked extensions with `./dev`.

#### React/Flux hot reload

This boilerplate uses `Webpack` and `react-transform`, and use `Redux`. You can hot reload by editing related files of Popup & Window. If the inject page is on https (like `https://github.com`), click the 'shield' icon on the Chrome address bar to allow loading `http://localhost` there (after making any changes in dev mode), so hot reload can work for that page.

## Build extension

```bash
# build files to './build/extension'
npm run build:extension
```

## Build app

```bash
# build files to './build/app'
npm run build:app
```

## Build firefox extension

```bash
# build files to './build/firefox'
npm run build:firefox
````
Note that it's [not possible for now to load Firefox extensions from local directories](https://bugzilla.mozilla.org/show_bug.cgi?id=1185460), so use `npm run compress:firefox` instead to generate an xpi file.

## Build & Compress ZIP file

```bash
# compress extension's build folder to extension.zip
npm run compress:extension

# compress app's build folder to app.zip
npm run compress:app

# compress firefox extension's build folder to firefox.xpi
npm run compress:firefox
```

## Load

- [Load the extension to Chrome](https://developer.chrome.com/extensions/getstarted#unpacked).
- [Launch your Chrome app](https://developer.chrome.com/apps/first_app#five).
- Firefox: [Prerequisites](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Prerequisites), [Installing](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Packaging_and_installation#Installing_Your_Extension).

## Test

```bash
# test app
npm run test:app

# start Chromedriver for testing with Chrome
npm run before:test:chrome

# test Chrome extension
npm run test:chrome:extension

# test Chrome app
npm run test:chrome:app

# test Chrome extension and app
npm run test:chrome

# test everything
npm test
```

## Roadmap

- [x] Chrome app
- [x] Chrome extension
- [x] Firefox extension (see [the current status](https://github.com/zalmoxisus/browser-redux/issues/12))
- [ ] Safari extension (based on [Chrome to Safari port](https://code.google.com/p/adblockforchrome/source/browse/trunk/port.js))

## LICENSE

[MIT](LICENSE)