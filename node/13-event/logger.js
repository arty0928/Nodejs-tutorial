const EventEmitter = require('events');


//emitter에 logger가 합쳐짐
class Logger extends EventEmitter{
    log(callback){
        this.emit('log','started...');
        callback();
        this.emit('log','ended!');
    }
}

module.exports.Logger = Logger;