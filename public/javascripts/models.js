/**
 * Created by haakonkaurel on 21/05/15.
 */

Fetcher.Textunit = DS.Model.extend({
    title: DS.attr('string')
});

Fetcher.Textunit.FIXTURES = [
    {
        id: 1,
        title: "Cool story"
    },
    {
        id: 2,
        title: "Bad story"
    }
];

