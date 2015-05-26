/**
 * Created by haakonkaurel on 24/05/15.
 */

var express = require('express');
var router = express.Router();
var utils = require('../utils/utils.js');
var request = require('request');

function perform_query(url, cb) {
    var url = utils.padded_url(url);
    var $;
    request(url, function (error, response, body) {
        try {
            $ = cheerio.load(body);
        } catch (err) {
        }
        cb($, url);
    });
}

router.post('/', function(req, res) {
    var url = req.body.fetchurl;
    utils.perform_query(url, function($, url) {
        utils.process_query_result($, url, function(processed_result) {
            res.send(processed_result);
        });
    });
});

router.post('/raw/', function(req, res) {
    request.get(req.body.fetchurl, function(error, response, body) {
        res.send(body);
    });
});

module.exports = router;
