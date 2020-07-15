var fs = require('fs-extra'); // fs module
var path = require('path');
var CONFIG = require('./config.js');
var fn = require('./function.js');
var scpClient = require('scp2')

var scpConfig ={
    host: CONFIG.scp.host,
    username: CONFIG.scp.username,
    password: CONFIG.scp.password,
    path: ''
};

module.exports.createSCPConfig = function() {


};

module.exports = function(){

    //console.log(process.env);


    scpClient.scp(
            'src path',
            scpConfig,
            function(err) {
                console.log(err);
            }
    );

};