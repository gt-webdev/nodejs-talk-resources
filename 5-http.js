var http = require('http');

var server = http.createServer(function(req, res) {
	req.on('data', function(data) {
		res.write(data);
	});

	req.on('end', function(data) {
		res.end();
	});
});

server.listen(3000);