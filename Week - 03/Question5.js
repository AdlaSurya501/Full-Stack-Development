// In a payment processing system, you need to:
// Authenticate the user, verify if the payment method is valid, Process the
// payment, Update the user’s account balance, and notify the user of the
// payment result via email.
// Design this payment processing system using callbacks to ensure each step
// happens in order?
function authenticateUser(userId, validation, callback) {
    if( validation == true) {
        console.log("User is authenticated")
        console.log("UserID : ",userId)
        setTimeout( function() { callback( userId,true,processPayment ) },2000)
    }
}
function verifypaymentMethod( userId,validation,callback) {
    if( validation == true) {
        console.log("Verified the payment method for the userId : ",userId)
        setTimeout( () => callback( userId,200,updateAccountBalance ) ,2000 )
    }
}
function processPayment( userId,amt,callback) {
    console.log("The amount that should be payed is ",amt," for the userId :",userId)
    setTimeout( () => callback(userId,1234567,200,notify) ,2000)
}
function updateAccountBalance( userId,accNo,amt,callback ) {
    console.log("The account:",accNo, "balance is updated for the user :",userId,", amt:",amt)
    setTimeout( ()=> callback(userId,"surya501@gmail.com"),2000)
}
function notify( userId,mail ) {
    console.log("The notification is sent to the user :",userId,", mail :",mail)
}
authenticateUser( 143,true, verifypaymentMethod )