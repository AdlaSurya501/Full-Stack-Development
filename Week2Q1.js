// Write a function mergeArrays that accepts any number of arrays as arguments and 
// merges them into a single array. Use the spread operator to accomplish this.
// Example Input:
// mergeArrays ([1, 2], [3, 4], [5, 6])
// Example Output:
// [1, 2, 3, 4, 5, 6]
var arr=[[1,2],[3,4],[5,6]];
merge(arr);
function merge(arr){
    var arr2=[];
    for(let x of arr)
    {
        arr2=arr2.concat([...x]);
    }
    for(let i=0;i<arr2.length;i++){
        console.log(arr2[i]+" ");
    }
}
