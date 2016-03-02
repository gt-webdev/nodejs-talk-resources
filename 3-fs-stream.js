var fs = require('fs');

var reader = fs.createReadStream('hello.txt');
var writer = fs.createWriteStream('hi.txt');

reader.on('end', function() {
	console.log("File copied");
});

reader.pipe(writer);
