//truthy falsy values; 
// In JavaScript, truthy and falsy values are used to evaluate decision criteria that aren't clearly true or false. Truthy values are non-boolean values that are evaluated as true in a Boolean context. Falsy values are non-boolean values that are evaluated as false in a Boolean context.

// Truthy values are as following:- 

// Non-zero numbers
const username1 = 3 //true

// Non-empty strings
const username2 =" " //true

// Objects
 const username3 ={} //true

// Arrays
const username4 =[] //true

// Functions
 const username5  = function(){} //true

// Any other non-falsy value




//Falsy = False, Zero, Empty strings, Undefined variables, Null variables, and NaN.

//False
const username6  = false// false

//Zero
 const username7  = 0; //false

//Empty strings
const username8  = ""; //false

//Undefined
const username9  = undefined; //false


//Null
 const username10  = null; //false


//NaN
const username  = NaN; //false

if (username){
    console.log(true);
}
else{
    console.log(false);
}
