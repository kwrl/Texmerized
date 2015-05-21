var request = require('request');
var cheerio = require('cheerio');
var validUrl = require('valid-url');
var urlParser = require('url');

function perform_query(url, cb) {
    var url = padded_url(url);
    var $;
    request(url, function (error, response, body) {
        try {
            $ = cheerio.load(body);
        } catch (err) {
        }
        cb($, url);
    });
}

function padded_url(url) {
    if(validUrl.is_web_uri(url)) {
        return url;
    } else {
        var padded_url = "http://" + url;
        if(validUrl.is_web_uri(padded_url)) {
            return padded_url;
        }
        return url;
    }
}

function upper_level_domain(url) {
    var domain = url;
    try {
        var parsed_url = urlParser.parse(url);
        var parts = parsed_url.hostname.split(".");
        while(parts.length>2) {
            parts.shift();
        }
        domain = parts.join('.');
    } catch (err) {
    }

    return domain;
}

function process_query_result(data, url, cb) {
    var processed_result = {
        links: [],
        text_units: []
    };
    var domain = upper_level_domain(url);
    data("p").each(function(i, elem){
        processed_result.text_units.push(data(this).text());
    });

    cb(processed_result);
}

var exports = module.exports;

exports.process_query_result = process_query_result;
exports.perform_query = perform_query;
exports.padded_url = padded_url;
exports.upper_level_domain = upper_level_domain;