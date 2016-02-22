import WebRequestListener from './webRequest'

export default {
    init: function(vAPI, store) {
        new WebRequestListener(vAPI).listen(store);

        vAPI.net.registerListeners();
    }
}