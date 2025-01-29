// Write a function greet that takes a name and a callback function.
// The function should return a greeting message by calling the callback with
// the message.
function greet(name,call) {
    console.log("Good morning")
    call(name);
}
function call(nam) {
    console.log("Hello to",nam)
}
greet("Surya",call);