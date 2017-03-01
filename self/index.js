var through2 = require('through2');
var dogescript = require('dogescript');
var string_decoder = require('string_decoder');
var stream = require('stream');
var gutil = require('gulp-util');

var decoder = new string_decoder.StringDecoder();

var main = function (beauty, trueDoge) { 
var tr = through2.obj(function (file, encoding, callback) {
/* 
		very that is this
		very output is new stream.PassThrough
		console dose loge with file.name
		console dose loge with file
		very content is ''
		very newStream is through2 dose obj with much buf encoding callback
			very content is buf dose toString
			very result is plz dogescript with content !!beauty !!trueDoge
			plz callback with null file
		wow&
		very file is file dose pipe with newStream
		plz callback with null file
*/ 
var content = file.contents.toString();
var oldPath = file.path.toString();
var result = dogescript(content, !!beauty, !!trueDoge);
var output = file.clone();
output.contents = new Buffer(result);
output.path = gutil.replaceExtension(oldPath, '.js');
this.push(output);
callback();
}) 
return tr;
} 

module.exports = main 

