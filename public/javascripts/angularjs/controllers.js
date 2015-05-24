/**
 * Created by haakonkaurel on 24/05/15.
 */

var texmerizedApp = angular.module('texmerizedApp', []);

texmerizedApp.controller('TextUnitController', function ($scope) {
    $scope.queryChanged = function () {
        document.title = $scope.query;
        $scope.textunits = [];
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
    $scope.textunits = [
        {
            'title': 'just a test',
            'paragraphs': [
                'testing some more',
                'lorem ipsum etc'
            ]
        },
        {
            'title': 'just another test',
            'paragraphs': [
                'asdads asdasd asdasd',
                'asda asda etc lol'
            ]
        }
    ];
}).directive('textunit', function() {
        return {
            templateUrl : function(elem, attr) {
                return 'directives/textunit.html';
            }
        }
    }

);
