// Create an event emitter that emits a "userDetails" event with
// two arguments: name and age. Write a listener that formats the output and
// logs it as "Hello, [name]! You are [age] years old."
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('userDetails', (name, age) => {
    console.log(`Hello, ${name}! You are ${age} years old.`);
});
eventEmitter.emit('userDetails', 'Rohith', 20);
eventEmitter.emit('userDetails', 'Amar', 25);