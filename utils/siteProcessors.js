/**
 * Created by haakonkaurel on 24/05/15.
 */

function default_approach_by_root($, root, cb) {
    var processed_result = {
        links: [],
        text_units: []
    };
    if ($) {
        var text_unit = {
            title: $("#firstHeading").text(),
            paragraphs: []
        };

        $(root).children().each(function (i, elem) {
            if ($(elem).is("h1, h2, h3, h4, h5, h6")) {
                if (text_unit.paragraphs.length > 0) {
                    processed_result.text_units.push(text_unit);
                }
                text_unit = {
                    title: $(elem).text(),
                    paragraphs: []
                };
            } else if ($(elem).is("p") && $(elem).text() != "") {
                text_unit.paragraphs.push($(elem).text());
            }
        });
    }
    cb(processed_result);
}

function default_site_processor($, url, cb) {
    var largest = -1;
    var rootNode;
    var childCount;
    if ($) {
        $("*").each(function (i, elem) {
            childCount = $(elem).children("p, h2, h3").length;
            if (childCount > largest) {
                largest = childCount;
                rootNode = elem;
            }
        });
    }
    default_approach_by_root($, rootNode, cb);
}

function wikipedia_site_processor($, url, cb) {
    default_approach_by_root($, $("#mw-content-text"), cb);
}

var exports = module.exports;
exports.default = default_site_processor;
exports.wikipedia = wikipedia_site_processor;