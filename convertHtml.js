var fs = require('fs-extra');
var path = require('path');

var CONFIG = require('./config.js');
var fn = require('./function.js');
var init = require('./init.js');

module.exports = function(){
        var header = {
                type: {
                        utf8: CONFIG.release + CONFIG.commonParts.directory + CONFIG.commonParts.files[0],
                        shiftjis: CONFIG.release + CONFIG.commonParts.directory + CONFIG.commonParts.files[1]
                },
                startTag: CONFIG.tag.header.start,
                endTag: CONFIG.tag.header.end,
                endTagLen: CONFIG.tag.header.end.length
        };
        var footer = {
                type: {
                        utf8: CONFIG.release + CONFIG.commonParts.directory + CONFIG.commonParts.files[2],
                        shiftjis: CONFIG.release + CONFIG.commonParts.directory + CONFIG.commonParts.files[3]
                },
                startTag: CONFIG.tag.footer.start,
                endTag: CONFIG.tag.footer.end,
                endTagLen: CONFIG.tag.footer.end.length
        };

        fn.optimizeHtmlParts(header.type.utf8, header.startTag, header.endTag, header.endTagLen, true);
        fn.optimizeHtmlParts(header.type.shiftjis, header.startTag, header.endTag, header.endTagLen, false);
        fn.optimizeHtmlParts(footer.type.utf8, footer.startTag, footer.endTag, footer.endTagLen, true);
        fn.optimizeHtmlParts(footer.type.shiftjis, footer.startTag, footer.endTag, footer.endTagLen, false);

}

