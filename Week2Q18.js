// Create a custom iterable object that allows iteration through an array in reverse 
// order. Ensure that it uses a proper iterator with the next() method and handles the 
// done state correctly. 
// Example Input: const arr = [1, 2, 3, 4] 
// Expected Output: 4 3 2 1 
const reverseArray = (arr) => {
    return {
      [Symbol.iterator]() {
        let index = arr.length - 1;
        return {
          next() {
            if (index >= 0) {
              return { value: arr[index--], done: false };
            } else {
              return { value: undefined, done: true };
            }
          }
        };
      }
    };
};
const arr = [1, 2, 3, 4];
const reverseIter = reverseArray(arr);
for (const value of reverseIter) {
    console.log(value);
}