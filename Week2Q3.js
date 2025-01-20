// Write a function updateEmployeeDetails that takes an object representing an 
// employee’s details and updates their role while maintaining the other properties 
// using the spread operator.
// Example Input:
// const employee = {name: ‘Afroz’, role: ‘Developer’, age: 28, location: ‘IN’}
// updateEmployeeDetails (employee, ‘Senior Developer’)
// Example Output:
// {name: ‘Afroz’, role: ‘Senior Developer’, age: 28, location: ‘IN’}
function updateEmployeeDetails(employee, newRole) {
    employee.role = newRole;
    return {
        ...employee
    };
}
const employee = { name: 'Afroz', role: 'Developer', age: 28, location: 'IN' };
const updatedEmployee = updateEmployeeDetails(employee, 'Senior Developer');
console.log(updatedEmployee);
