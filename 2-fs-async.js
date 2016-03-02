var fs = require("fs");

fs.readFile('hello.txt', 'utf8', function(err, data) {
	fs.writeFile('hi.txt', data, function(err) {
		console.log("File copied");
	});
});
