/**
 * Created by haakonkaurel on 22/05/15.
 */

Fetcher.TextUnitsController = Ember.ArrayController.extend({
    actions: {},
    searchUrlChanged: function () {
        document.title = this.get('fetchUrl');
        if(!$scope.queryField.$valid) {
            return;
        }
        $.post("/query", {"fetchurl": this.get('fetchUrl')})
            .success(function (data) {
                if (data != "") {
                    data.text_units.forEach(function (element) {
                        if (element != "") {
                            var textunit = this.store.createRecord('textunit', {
                                title: element
                            });
                            textunit.save();
                        }
                    });
                }
            }
        );
    }.observes("fetchUrl")
});

Fetcher.TextUnitController = Ember.ObjectController.extend({
    actions: {
        removeTextUnit: function () {
            var textunit = this.get('model');
            textunit.deleteRecord();
            textunit.save();
        }
    }
});

