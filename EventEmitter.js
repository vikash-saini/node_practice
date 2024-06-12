const EventEmitter = require("events");

var eventEmitter = new EventEmitter();

eventEmitter.on('onLoad',()=>{
    console.log("event triggered");
})

eventEmitter.on('onClick',()=>{
    console.log("event click");
})

eventEmitter.emit('onClick');
