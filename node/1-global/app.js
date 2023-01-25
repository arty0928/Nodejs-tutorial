const fs = require('fs');

console.log(global);


global.hello = () =>{
    global.console.log('h');
}

global.hello();
hello();