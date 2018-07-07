var events = require("events");

var eventEmitter = new events.EventEmitter();

var connectedHandler = function connected() {

    console.log("Connected !!!");
}

var disconnectedHandler = function disconnected() {

    console.log("DisConnected !!!");
}

eventEmitter.on("connected", connectedHandler);
eventEmitter.on("disconnected", disconnectedHandler);

console.log("#######Event loop test START#########");


eventEmitter.emit("connected");
eventEmitter.emit("disconnected");


console.log("#######Event loop test END#########");


console.log("************Event loop test2 START*********");

var events = require("events");
var eventloop = new events.EventEmitter();

var listener1 = function listener1() {

    console.log("event_test listener1");
}

var listener2 = function listener2(arg1, arg2) {

    console.log("event_test listener2  arg1 = " + arg1);
    console.log("event_test listener2  arg2 = " + arg2);

}

eventloop.addListener("event_test", listener1);
eventloop.addListener("event_test", listener2);


eventloop.emit("event_test", "hello1", "hello2")

console.log("************Event loop test2 END*********");
