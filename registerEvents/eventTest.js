
 const notifyCustomer = require('../controller/notifyCustomer');
const notifySeller = require('../controller/notifySeller');
const notifyTras = require('../controller/notifyTransport');

const myFun = require("../controller/alarm")

const EventEmitter = require('events');

class eventEmitter extends EventEmitter {}

const myEmitter = new eventEmitter();
const emitter = new eventEmitter();


emitter.on('order', notifyCustomer);
emitter.on('order', notifySeller);
emitter.on('order', notifyTras);

myEmitter.on('event', myFun);


module.exports = {emitter, myEmitter};



//   module.exports = myFun;