/**
 * Created by haakonkaurel on 25/05/15.
 */
var angular = require('angular'),
    controllers = require('./controllers'),
    directives = require('./directives'),
    filters = require('./filters');

var texmerizedApp = angular.module('texmerizedApp', ['texmerizedFilters']);

texmerizedApp
    .controller('TextUnitController', ['$scope', '$http', controllers.TextUnitController])
    .directive('textunit', directives.textunit)
    .directive('obscure', directives.obscure_textunit);

var filters = angular.module('texmerizedFilters', []).filter('obscure', filters.obscure);
