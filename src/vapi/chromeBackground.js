import µBlock from './uriTools';

const vAPI = {};

/******************************************************************************/
/******************************************************************************/

vAPI.net = {};
vAPI.tabs = {};

var toChromiumTabId = function(tabId) {
    if ( typeof tabId === 'string' ) {
        tabId = parseInt(tabId, 10);
    }
    if ( typeof tabId !== 'number' || isNaN(tabId) || tabId === -1 ) {
        return 0;
    }
    return tabId;
};

/******************************************************************************/

vAPI.net.registerListeners = function() {
    var µb = µBlock;
    var µburi = µb.URI;

    var normalizeRequestDetails = function(details) {
        details.tabId = details.tabId.toString();
        details.hostname = µburi.hostnameFromURI(details.url);

        // The rest of the function code is to normalize type
        if ( details.type !== 'other' ) {
            return;
        }

        details.type = 'object';
    };

    var headerValue = function(headers, name) {
        var i = headers.length;
        while ( i-- ) {
            if ( headers[i].name.toLowerCase() === name ) {
                return headers[i].value.trim();
            }
        }
        return '';
    };

    var onBeforeRequestClient = this.onBeforeRequest.callback;

    var onBeforeRequest = function(details) {
        normalizeRequestDetails(details);
        return onBeforeRequestClient(details);
    };

    //var onCompletedClient = this.onCompleted.callback;

    var onCompleted = function(details) {
        return onCompletedClient(details);
    };

    var installListeners = (function() {
        var crapi = chrome.webRequest;

        if ( crapi.onBeforeRequest.hasListener(onBeforeRequest) === false ) {
            crapi.onBeforeRequest.addListener(
                onBeforeRequest,
                {
                    'urls': this.onBeforeRequest.urls || ['<all_urls>'],
                    'types': this.onBeforeRequest.types || undefined
                },
                this.onBeforeRequest.extra
            );
        }

        /*if ( crapi.onCompleted.hasListener(onCompleted) === false) {
            crapi.onCompleted.addListener(
                onCompleted,
                {
                    'urls': this.onBeforeRequest.urls || ['<all_urls>'],
                    'types': this.onBeforeRequest.types || undefined
                },
                this.onCompleted.extra
            );
        }*/

    }).bind(this);

    installListeners();
};

/******************************************************************************/

vAPI.tabs.injectScript = function(tabId, details, callback) {
    var onScriptExecuted = function() {
        // https://code.google.com/p/chromium/issues/detail?id=410868#c8
        if ( chrome.runtime.lastError ) {
            /* noop */
        }
        if ( typeof callback === 'function' ) {
            callback();
        }
    };
    if ( tabId ) {
        chrome.tabs.executeScript(toChromiumTabId(tabId), details, onScriptExecuted);
    } else {
        chrome.tabs.executeScript(details, onScriptExecuted);
    }
};

/******************************************************************************/

vAPI.getURL = chrome.runtime.getURL;

export default vAPI;
