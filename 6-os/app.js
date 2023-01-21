const os = require('os');

console.log(os.EOL === '\n');//mac
console.log(os.EOL === '\r\n'); //window

console.log(os.hostname());