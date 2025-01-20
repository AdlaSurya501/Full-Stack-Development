// const userAddress = {address: ‘Mangalpally’, city: ‘Hyderabad’}
// const userPreferences = {theme: ‘Engineering Edu’, language: ‘EN’}
// Example Output:
// {name: ‘CVR’, age: 25, address: ‘Mangalpally’, city: ‘Hyderabad’, 
// theme: ‘Engineering Edu’, language: ‘EN’}

const userDetails = {name: 'CVR', age: 25}
const userAddress = {address: 'Mangalpally', city: 'Hyderabad'}
const userPreferences = {theme: 'Engineering Edu', language: 'EN'}
const obj=merge(userDetails,userAddress,userPreferences)
function merge() {
    let [userDet,userAdd,userPre] = arguments;
    let user={...userDet,...userAdd,...userPre};
    return {
        ...user
    };
}
console.log(obj);
