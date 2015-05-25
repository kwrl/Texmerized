/**
 * Created by haakonkaurel on 24/05/15.
 */

var texmerizedApp = angular.module('texmerizedApp', ['texmerizedFilters']);

texmerizedApp.controller('TextUnitController', function ($scope, $http) {
    $scope.textunits = [];
    $scope.query = '';

    $scope.$watch('query', function (newQuery, oldQuery) {
        document.title = newQuery;
        $http.post("/query", {
            "fetchurl": newQuery
        }).success(function (data, status, headers, config) {
                $scope.textunits = [];
                data.text_units.forEach(function (elem) {
                    $scope.textunits.push({
                        title: elem.title,
                        paragraphs: elem.paragraphs
                    });
                });
            }
        );
    });

}).directive('textunit', function () {
    return {
        templateUrl: function (elem, attr) {
            return 'directives/textunit.html';
        }
    };
}).directive('obscure', function () {
    return {
        templateUrl: function (elem, attr) {
            return 'directives/obscure-textunit.html';
        }
    };
});
