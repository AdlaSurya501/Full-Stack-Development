// Create an object where two properties are defined using unique Symbols. Demonstrate 
// how you can access them and show that they do not conflict with each other even if 
// they have the same description. 
const symbol1 = Symbol('property');
const symbol2 = Symbol('property');
const obj = {
  symbol1: 'This is the value for symbol1',
  symbol2: 'This is the value for symbol2'
};
console.log(obj.symbol1);
console.log(obj.symbol2);
console.log(symbol1 === symbol2);