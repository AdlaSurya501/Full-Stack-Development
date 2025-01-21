// You have the following array of 5 numbers: 
// const nums = [10, 20, 30, 40, 50]; 
// Use array destructuring to swap the first and third elements of the array and the 
// second and fourth elements. Then, log the modified array.
let nums = [10, 20, 30, 40, 50];
let [a,b,c,d,e] = nums;
[a,b,c,d,e] = [c,d,a,b,e]
nums = [a,b,c,d,e]
console.log(a,b,c,d,e);