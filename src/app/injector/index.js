import AlternativesInjector from './alternatives'

export default {
    init: function(vAPI, store) {
        new AlternativesInjector(vAPI).listen(store);
    }
}