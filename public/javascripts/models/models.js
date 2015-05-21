/**
 * Created by haakonkaurel on 21/05/15.
 */

Fetcher.Paragraph = DS.Model.extend({
    plain: DS.attr('string')
});

Fetcher.TextUnit = DS.Model.extend({
    title: DS.attr('string'),
});
