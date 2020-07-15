var fs = require('fs-extra');
var iconv = require('iconv-lite'); // support Shift-jis
var path = require('path');

var CONFIG = require('./config.js');
var fn = require('./function.js');
var init = require('./init.js');
var convertHtml = require('./convertHtml.js');
var arrangePath = require('./arrangePath.js');
var shiftjis = require('./shiftjis.js');
var scpContents = require('./scpContents.js');

const CMD = {
        init: 'init',
        convertHtml: 'convertHtml',
        arrangePath: 'arrangePath',
        shiftjis: 'shiftjis',
        scpContents: 'scpContents',
        convertInit: 'convertInit',
        convert: 'convert'
};

var cmd = process.argv[2];

if(cmd === CMD.init) {
    init();
    console.log('init done');

} else if(cmd === CMD.arrangePath) {
    arrangePath();
    console.log('arrangePath done');

} else if(cmd === CMD.convertHtml) {
    convertHtml();
    console.log('convertHtml done');

} else if(cmd === CMD.shiftjis) {
    shiftjis();
    console.log('shiftjis done');

} else if(cmd === CMD.scpContents) {
    console.log(process.env);
    console.log(CONFIG);
    scpContents();
    console.log('scpContents done');

} else if(cmd === CMD.convertInit) {
    init();
    arrangePath();
    console.log('convertInit done');

} else if(cmd === CMD.convert) {
    init();
    arrangePath();
    convertHtml();
    shiftjis();
    //scpContents();
    console.log('convert done');
}
