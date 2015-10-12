# Browser App and Extension Boilerplate using Redux Actions

Simple boilerplate and library for building Chrome apps and cross-browser extensions (support for Firefox and Safari will come later) that use Redux actions instead of messaging.

![Demo](demo.gif)

Redux states are synced between background, inject page, app window, extension popup and badge.

The developing is the same as for the web apps with React and Redux, just use the `src/app` boilerplate. If you need some extension or Chrome app customizations, use `src/browser/` boilerplates.

The app example is edited from [Redux Counter example](https://github.com/rackt/redux/tree/master/examples/counter) using [Redux Persist](https://github.com/rt2zz/redux-persist), based on [React Chrome Extension Boilerplate](https://github.com/jhen0409/react-chrome-extension-boilerplate).

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

This boilerplate uses `Webpack` and `react-transform`, and use `Redux`. You can hot reload by editing related files of Popup & Window.

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

## Build & Compress ZIP file

```bash
# compress extension's build folder to extension.zip
npm run compress:extension

# compress app's build folder to app.zip
npm run compress:app
```

## Load to Chrome

- [Load the extension](https://developer.chrome.com/extensions/getstarted#unpacked)
- [Launch your app](https://developer.chrome.com/apps/first_app#five)


## Roadmap

- [ ] Add tests (using [sinon-chrome](https://github.com/vitalets/sinon-chrome))
- [ ] Firefox extension (according to [wiki.mozilla.org/WebExtensions](https://wiki.mozilla.org/WebExtensions))
- [ ] Safari extension (based on [Chrome to Safari port](https://code.google.com/p/adblockforchrome/source/browse/trunk/port.js))

## LICENSE

[MIT](LICENSE)