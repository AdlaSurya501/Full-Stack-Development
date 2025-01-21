// Create two global symbols with the same key using Symbol.for(). When retrieved from 
// the global symbol registry, show that they are the same symbol and explain the 
// difference between Symbol() and Symbol.for().
const globalSymbol1 = Symbol.for('sharedKey');
const globalSymbol2 = Symbol.for('sharedKey');
console.log(Symbol.keyFor(globalSymbol1));
console.log(Symbol.keyFor(globalSymbol2));
console.log(globalSymbol1 === globalSymbol2);