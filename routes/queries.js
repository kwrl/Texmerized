/**
 * Created by haakonkaurel on 24/05/15.
 */

var express = require('express');
var router = express.Router();
var utils = require('../utils/utils.js');

router.post('/', function(req, res) {
    var url = req.body.fetchurl;
    utils.perform_query(url, function($, url) {
        utils.process_query_result($, url, function(processed_result) {
            console.log(url);
            res.send(processed_result);
        });
    });
});

module.exports = router;
