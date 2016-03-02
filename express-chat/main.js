var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var messages = [];

app.use(bodyParser.json());

app.get('/messages', function(req, res) {
	res.send(messages);
});

app.post('/messages', function(req, res) {
	messages.push(req.body);
	res.status(200).send();
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);

console.log("Server listening on port 3000...");