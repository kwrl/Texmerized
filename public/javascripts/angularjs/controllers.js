/**
 * Created by haakonkaurel on 24/05/15.
 */

var texmerizedApp = angular.module('texmerizedApp', []);

texmerizedApp.controller('TextUnitController', function ($scope) {
    $scope.queryChanged = function () {
        document.title = $scope.query;
        $.post("/query", {
            "queryID": $scope.queryID++,
            "fetchurl": $scope.query
        }).success(function (data) {
                $scope.textunits = [];
                data.text_units.forEach(function (elem) {
                    $scope.textunits.push({
                        title: elem.title,
                        paragraphs : elem.paragraphs
                    });
                });
            }
        );
    };
    $scope.textunits = [
    ];
}).directive('textunit', function() {
        return {
            templateUrl : function(elem, attr) {
                return 'directives/textunit.html';
            }
        }
    }

);
