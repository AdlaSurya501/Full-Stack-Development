// Write a function createProfile that accepts an object with name, age, email, and 
// address. Use object destructuring to extract the name and email and return a new 
// object containing only the name and email.
let obj = {name:"Surya",age:20,email:"FSD@gmail.com",address:"Hyderabad"};
function createProfile(obje) {
    let {name,email} = obje;
    return {
        name :name,
        email :email
    };
}
const updated = createProfile(obj);
console.log(updated);
