/**
 * Created by haakonkaurel on 24/05/15.
 */
var stopwords = [];

$(document).ready(function () {
    $.get("/misc/stopwords_english.txt")
        .success(function (data) {
            stopwords = data.split('\n');
        });
});

angular.module('texmerizedFilters', []).filter('obscure', function () {
    return function (text) {
        stopwords.forEach(function (stopword) {
            var repl = "";
            for (var i = 0; i < stopword.length; i++) {
                repl += "*";
            }
            var regex = new RegExp(" " + stopword + " ", "g");
            text = text.replace(regex, " " + repl + " ");
        });
        return text;
    }
});
