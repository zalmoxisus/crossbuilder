# CrossBuilder

[![Build Status](https://travis-ci.org/zalmoxisus/crossbuilder.svg)](https://travis-ci.org/zalmoxisus/crossbuilder)  [![Build status Windows](https://ci.appveyor.com/api/projects/status/83c3h264p0li62kl?svg=true)](https://ci.appveyor.com/project/zalmoxisus/crossbuilder) [![bitHound Score](https://www.bithound.io/github/zalmoxisus/crossbuilder/badges/score.svg)](https://www.bithound.io/github/zalmoxisus/crossbuilder) [![Dependency Status](https://david-dm.org/zalmoxisus/crossbuilder.svg)](https://david-dm.org/zalmoxisus/crossbuilder) [![devDependency Status](https://david-dm.org/zalmoxisus/crossbuilder/dev-status.svg)](https://david-dm.org/zalmoxisus/crossbuilder#info=devDependencies)

Building web, Electron, Cordova and Chrome apps, and cross-browser extensions that use Redux actions for messaging.

Redux states are synced between background, injected page, app window, extension popup and badge.

The developing is the same as for the web apps with React and Redux, just use the `src/app` boilerplate.

## Structure

- `src/app`: React cross-browser application (will be imported in the apps bellow).
- `src/web`: web app sources.
- `src/browser`: extensions sources.
- `src/chromeApp`: Chrome app sources
- `src/electron`: Electron app sources
- `test/app`: tests for Redux actions and reducers, and for React components (using [enzyme](http://airbnb.io/enzyme/)).
- `test/chrome`: tests for Chrome app and extension (using [chromedriver](https://www.npmjs.com/package/chromedriver), [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)).

## CrossBuilder included libraries
 - [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
 - [redux-notify](https://github.com/zalmoxisus/redux-notify)
 - [crossmessaging](https://github.com/zalmoxisus/crossmessaging)
 - [chrome-storage-local](https://github.com/zalmoxisus/chrome-storage-local)

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
npm start
```

- Open web app in browser at `localhost:3000`.
- [Load unpacked extension's `./dev` folder to Chrome.](https://developer.chrome.com/extensions/getstarted#unpacked)

#### React/Flux hot reload

This boilerplate uses `Webpack` and `react-transform`. You can hot reload by editing related files of `./src/app`. If the inject page for the extension is on https (like `https://github.com`), click the 'shield' icon on the Chrome address bar to allow loading `http://localhost` there (after making any changes in dev mode), so hot reload can work for that page.

#### Debug with Redux DevTools

We use [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension), install it from [Chrome store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) for debugging.

## Build web app

```bash
# build files to './build/web'
npm run build:web
```

## Build Electron app

```bash
# build files to './build/electron'
npm run build:electron

# or to start it
npm run start:electron
```

## Build Chrome app

```bash
# build files to './build/app'
npm run build:app
```

## Build Chrome extension

```bash
# build files to './build/extension'
npm run build:extension
```

## Build Firefox extension

```bash
# build files to './build/firefox'
npm run build:firefox
````
Note that you should use Firefox Nightly or Developer Edition to support WebExtensions. It's [not possible for now to load Firefox extensions from local directories](https://bugzilla.mozilla.org/show_bug.cgi?id=1185460), so use `npm run compress:firefox` instead to generate an xpi file or use Firefox Developer Edition which can load local directories. Make sure yo follow [prerequisites](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Prerequisites) and [installing instruction](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Packaging_and_installation#Installing_Your_Extension).


## Build & Run Cordova app

1. Install global tools: `npm install -g cordova`.
2. Add your cordova platform by running `cordova platform add %PLATFORM%` (where `%PLATFORM%` is the platform you deploy for: android and more).
3. Use `cordova run android` or `cordova build android` to run or build the app (it will execute `npm run build:cordova` automatically [as a hook](https://github.com/zalmoxisus/crossbuilder/blob/master/hooks/build.sh)).

## Build & Compress

```bash
# build and compress Electron app to [name].dmg, win32-ia32.zip, win32-x64.zip, linux-ia32.zip, linux-x64.zip
npm run compress:electron

# compress Chrome app to app.zip
npm run compress:app

# compress Chrome extension to extension.zip
npm run compress:extension

# compress Firefox extension to firefox.xpi
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

- [x] Web app
- [x] Electron app
- [x] Chrome app
- [x] Chrome extension
- [x] Firefox extension (see [the current status](https://github.com/zalmoxisus/crossbuilder/issues/12))
- [ ] Safari extension (based on [Chrome to Safari port](https://code.google.com/p/adblockforchrome/source/browse/trunk/port.js))

## LICENSE

[MIT](LICENSE)