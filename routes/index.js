var express = require('express');
var router = express.Router();
var utils = require('../utils/utils.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', text: 'Nothing fetched' });
});


router.post('/', function(req, res) {
    var url = req.body.fetchurl;
    utils.perform_query(url, function($, url) {
        if($) {
            utils.process_query_result($, url, function(processed_result) {
                res.send(processed_result);
            });
        } else {
            console.log("No result");
            res.send("");
        }
    });
});

module.exports = router;
