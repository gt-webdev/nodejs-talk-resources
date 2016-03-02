var path = require('path');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send("Hey!");
});

app.use(express.static(path.join(__dirname, '/public')));

app.listen(3000);
