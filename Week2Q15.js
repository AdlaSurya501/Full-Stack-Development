// Write a function createProfile that accepts an object with name, age, and an array 
// interests. Use object destructuring to extract name and age, and array destructuring 
// to extract the first two interests. The function should return a new object with the 
// following structure: 
// {name: ‘John’, age: 25, primaryInterest: ‘Reading’, secondaryInterest: ‘Traveling’} 
function  createProfile(user){
    let {name,age} = user;
    let {interest} = user;
    let [primaryInterest,secondaryInterest]=interest;
    c={name,age,primaryInterest,secondaryInterest};
    return c;
}
const user = {name: "John", age: 25, interest:["Reading","Traveling"]};
console.log(createProfile(user));