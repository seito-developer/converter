var fs = require('fs-extra');
var CONFIG = require('./config.js');

module.exports = function(){

	//copy /public to /release
	fs.copySync(CONFIG.dist, CONFIG.release);

	var directorySecond = CONFIG.directories[0];
	// var directoryThird = CONFIG.directories[1];

	// Clone assets directory to each 2nd directory
	var cloneAssets = function(target){
		var index = 0;
		while (index < target.length) {
			var eachAssetsDirectory = CONFIG.release + target[index] + '/assets';
			fs.mkdirsSync(eachAssetsDirectory);
			fs.copySync(CONFIG.assets, eachAssetsDirectory);
			index++;
		}
	};
	cloneAssets(directorySecond);

	//Copy index.html to top/
	fs.copySync(CONFIG.dist + 'index.html', CONFIG.release + 'top/index.html');

	// make directory "/globalnavi"
	fs.ensureDirSync(CONFIG.release + '/globalnavi');

	//Create files in /globalnavi
	var createCommonParts = function(){
		var index = 0;
		var cpfLen = CONFIG.commonParts.files.length;
		var baseFile = CONFIG.dist + '/index.html';
		while (index < cpfLen) {
			fs.copySync(baseFile, CONFIG.release + CONFIG.commonParts.directory + '/' + CONFIG.commonParts.files[index]);
			index+=1;
		}
	};
	createCommonParts();
};