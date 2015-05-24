/**
 * Created by haakonkaurel on 24/05/15.
 */

function default_site_processor($, url, cb) {
    var processed_result = {
        links: [],
        text_units: []
    };
    if ($) {
        $("p").each(function (i, elem) {
            processed_result.text_units.push({title: $(this).text(), paragraphs: []});
        });
    }
    cb(processed_result);
}

function wikipedia_site_processor($, url, cb) {
    var processed_result = {
        links: [],
        text_units: []
    };
    if($) {
        var text_unit = {
            title: $("#firstHeading").text(),
            paragraphs: []
        };

        $("#mw-content-text").children().each(function(i, elem) {
            if($(elem).is("h2, h3")) {
                if(text_unit.paragraphs.length > 0) {
                    processed_result.text_units.push(text_unit);
                }
                text_unit = {
                    title: $(elem).text(),
                    paragraphs: []
                };
            } else if($(elem).is("p") && $(elem).text()!="") {
                text_unit.paragraphs.push($(elem).text());
            }
        });
    }
    cb(processed_result);
}

var exports = module.exports;
exports.default = default_site_processor;
exports.wikipedia = wikipedia_site_processor;