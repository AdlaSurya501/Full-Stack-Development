// Create three functions that take a number, multiply it by 2,
// subtract 3, and then add 10. Use callbacks to chain these operations together.
function mul( num, callback ) {
    num*=2;
    return callback ( num, (x) => { x+=10; return x } )
}
let m = mul( 10, (x,callback) => { x-=3; return callback( x ) } );
console.log(m);