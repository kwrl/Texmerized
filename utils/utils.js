var validUrl = require('valid-url');
var urlParser = require('url');
var siteProcessor = require('./siteProcessors.js');

function padded_url(url) {
    if (validUrl.is_web_uri(url)) {
        return url;
    } else {
        var padded_url = "http://" + url;
        if (validUrl.is_web_uri(padded_url)) {
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
        while (parts.length > 2) {
            parts.shift();
        }
        domain = parts.join('.');
    } catch (err) {
    }

    return domain;
}

function process_query_result($, url, cb) {
    if (upper_level_domain(url) == "wikipedia.org") {
        siteProcessor.wikipedia($, url, cb);
    } else {
        siteProcessor.default($, url, cb);
    }
}

var exports = module.exports;

exports.process_query_result = process_query_result;
exports.upper_level_domain = upper_level_domain;