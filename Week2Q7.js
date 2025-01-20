// Given the following array:
// const colors = [‘red’, ‘green’, ‘blue’, ‘yellow’]
// Use array destructuring to extract the first and second elements of the array into 
// individual variables.
// Use array destructuring to extract the second and fourth elements of the array into 
// individual variables.
const colors=['red','green','blue','yellow'];
const [one,two] =colors;
console.log(one,two);
const [,second,,fourth] =colors;
console.log(second,fourth);
