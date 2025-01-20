// Create a function calculateTotal that takes an arbitrary number of numeric values 
// (using the rest operator) and returns their sum.
// Example Input:
// calculateTotal (10, 20, 30, 40)
// Example Output:
// 100
calculateTotal(10,20,30,40);
function calculateTotal(...arr) {
    var sum=0;
    for(let i=0;i<arr.length;i++)
        sum+=arr[i];
    console.log(sum);
}
