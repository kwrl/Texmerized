/**
 * Created by haakonkaurel on 24/05/15.
 */

var exports = module.exports;
var stopwords = [];

exports.obscure = function () {
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
};
