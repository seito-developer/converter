var fs = require('fs-extra');
var path = require('path');
var depth = require('depth');
var rootPath = require('app-root-path');
var replaceFile = require('replace-in-file');
var CONFIG = require('./config.js');
var fn = require('./function.js');

module.exports = function(){

	var directorySecond = CONFIG.directories[0];
	var directoryThird = CONFIG.directories[1];
	var relativePath = function(selfDepth){
		if(selfDepth === 0 || selfDepth === 1){
			return './assets';
		} else if(selfDepth === 2){
			return './../assets';
		} else if(selfDepth === 3){
			return './../../assets';
		}
	};

	fn.eachFiles(CONFIG.release, null, function(filePath, rootPath) {
		var targetFileName = path.basename(filePath);
		//Target only .html file
		if(targetFileName.indexOf('.html') !== -1){

			//arrange clear path
			var thisPath = path.normalize(filePath);
			var thisRootPath = path.normalize(rootPath);
			var thisSimplePath = thisPath.replace(thisRootPath, '');

			//get depth -> 0, 1, 2 ...
			var thisDepth = depth(thisSimplePath);

			//Settings for replace
			var options = {
				files: thisPath,
				from: [/\/assets/g, /<meta charset="UTF-8">/g, /<meta property="og:image" content="https:\/\/www.twinring.jp\/home.\/assets\/top\/img\/ogp.png">/g],
				to: [relativePath(thisDepth), '<meta charset="SHIFT-JIS">', '<meta property="og:image" content="https://www.twinring.jp/assets/top/img/ogp.png">']
			};
			replaceFile.sync(options);
		}
	});
};