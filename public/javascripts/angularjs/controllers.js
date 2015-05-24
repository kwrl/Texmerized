/**
 * Created by haakonkaurel on 24/05/15.
 */

var texmerizedApp = angular.module('texmerizedApp', []);

texmerizedApp.controller('TextUnitController', function ($scope) {
    $scope.textunits = [
    ];


    $scope.queryChanged = function () {
        $scope.textunits = [];
        document.title = $scope.query;
        $.post("/query", {
            "queryID": $scope.queryID++,
            "fetchurl": $scope.query
        }).success(function (data) {
                data.text_units.forEach(function (elem) {
                    $scope.textunits.push({
                        title: elem.title,
                        paragraphs : elem.paragraphs
                    });
                });
            }
        );
    };

}).directive('textunit', function() {
        return {
            templateUrl : function(elem, attr) {
                return 'directives/textunit.html';
            }
        }
    }

);
