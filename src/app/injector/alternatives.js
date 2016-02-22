import * as _ from 'lodash';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import Alternative from 'app/components/Alternatives';
import { STYLES_URL, IMAGES_URL } from 'app/constants/assetsUrls';

class AlternativesInjector {

    constructor(vAPI) {
        this.vAPI = vAPI;
    }

    listen(store) {
        store.subscribe(() => {
            this.renderForEachTab(store.getState());
        });
    }

    buildDom(component) {
        return  "console.log('Prepare to inject');\
                function ready(f){ /in/.test(document.readyState) ? setTimeout(ready,90,f):f() }; \
                 ready(function() {\
                    console.log('LMEM injection'); \
                    var div = document.createElement('div'); \
                    div.innerHTML = '"+ component +"'; \
                    document.body.appendChild(div); \
                });";
    }

    renderForEachTab(state) {
        setTimeout(()=>{
            _.forIn(state.matchingTabs, (value, key) => {
                this.vAPI.tabs.injectScript(key, {
                    code: this.buildDom(this.renderForTab(key, value)),
                    runAt: 'document_start'
                });
            });
        }, 1500); //we wait for the Dom to be built
    }

    renderForTab(tabId, alternative) {
        var alternativeTo = alternative.matchingOffers[0];
        var stylesUrl = STYLES_URL + 'main.css';
        return renderToStaticMarkup(
            <Alternative matching={alternativeTo} stylesUrl={stylesUrl} imagesUrl={IMAGES_URL} />
        )
    }
}

export default AlternativesInjector;
