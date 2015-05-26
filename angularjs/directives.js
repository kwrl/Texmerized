/**
 *
 * Created by haakonkaurel on 25/05/15.
 */
var exports = module.exports;

exports.textunit = function () {
    return {
        templateUrl: function (elem, attr) {
            return 'directives/textunit.html';
        }
    };
};

exports.obscure_textunit = function () {
    return {
        templateUrl: function (elem, attr) {
            return 'directives/obscure-textunit.html';
        }
    };
};
