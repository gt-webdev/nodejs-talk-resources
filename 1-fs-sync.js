var fs = require("fs");

var contents = fs.readFileSync('hello.txt');
fs.writeFileSync('hi.txt', contents);

console.log("File copied.");
