const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.once('userDetails', (name, age)=>{
    console.log(`Hello, ${name}! I am ${age} years old.`);
});
emitter.emit('userDetails', 'Sankeerth', 31);
emitter.emit('userDetails', 'Varshith', 30);