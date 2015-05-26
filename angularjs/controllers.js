/**
 * Created by haakonkaurel on 24/05/15.
 */
var exports = module.exports;

var utils = require('../utils/utils');
var cheerio = require('cheerio');

exports.TextUnitController = function ($scope, $http) {
    $scope.textunits = [];
    $scope.query = '';
    $scope.filterDegree = 0.5;

    var update_textunits_expensive = function (newQuery, oldQuery) {
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
    };

    var update_textunits_cheap = function (newQuery, oldQuery) {
        document.title = newQuery;
        $http.post("/query/raw", {
            "fetchurl": newQuery
        }).success(function (data, status, headers, config) {
                try {
                    $ = cheerio.load(data);
                    utils.process_query_result($, newQuery, function(processed_result) {
                        $scope.textunits = processed_result.text_units;
                    });
                } catch (err) {
                }
            }
        );
    };

    //$scope.$watch('query', update_textunits_expensive);
    $scope.$watch('query', update_textunits_cheap);


};
