/**
 * Created by haakonkaurel on 21/05/15.
 */

Fetcher.Router.map(function() {
    this.resource('fetcher', { path : '/'});
});

Fetcher.FetcherRoute = Ember.route.extend({
    model: function() {
        return this.store.find('textunit');
    }
});
