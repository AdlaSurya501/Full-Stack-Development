// Write a function delayedMessage(message, delay) that prints the message after the specified 
// delay using setTimeout. Use a callback for when the message has been printed.
function delayedMessage( message, delay, callback ) {
    setTimeout( function() {callback(message)} , delay)
}
function mess(msg) {
    console.log(msg);
}
delayedMessage( "The message is delayed for 2sec", 2000, mess )