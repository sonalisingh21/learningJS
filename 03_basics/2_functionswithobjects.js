//SITUATIONS WHEN WE DONT KNOW THE NUMBER OF PARAMETERS  that can be passed into our function, for e.g. calculating price of a shopping cart in which items keep on adding/removing;

//generally 
function addCartItems(num1){
    return num1
}
console.log(`TOTAL PRICE OF ITEMS IN CART = ${addCartItems(600)}`);
//op = TOTAL PRICE OF ITEMS IN CART = 600

//what if we pass multiple arguments
console.log(`TOTAL PRICE OF ITEMS IN CART = ${addCartItems(600,500,900)}`);
// op = TOTAL PRICE OF ITEMS IN CART = 600 
//only the first argument gets printed

//if we want to print more than one argument using a single function parameter we can use rest operator;
//REST OPERATOR RETURNS AN ARRAY OF MULTIPLE VALUES PASSED INSIDE  FUNCTION
//note : argument name can be same for multiple functions
function addingCartPrice(val1, val2, ...num1){
    return num1
}
 
console.log(addingCartPrice(200,45,5767,89,344,46));
// op = [ 200, 45, 5767, 89, 344, 46 ]

//we can also pass values we dont want to include in ARRAY as val1, val2-
//val1' is declared but its value is never read.
// here o/p = [ 5767, 89, 344, 46 ] 

//HOW TO USE OBJECTS IN FUNCTIONS;

//STEP1 - CREATE AN OBJECT 
//STEP2- CREATE A FUNCTION 
//STEP3 - PASS OBJECT NAME INSIDE FUNCTION TO REFRENCE TO OBJECT PROPERTIES;

 const user= {
    username :"sonali",
    pass : 667895
 }
 function callingUser(someValue){
    console.log(`USERNAME :${someValue.username} AND PASSWORD :${someValue.pass}`);
 }

 callingUser(user);//op=  USERNAME :sonali AND PASSWORD :667895

 //HOW TO PASS VALUES WHILE EXECTUING FUNCTION
 callingUser({
    username:"neha",
    pass:56343
 })
 //op= USERNAME :neha AND PASSWORD :56343

 //HOW TO PASS ARRAYS INSIDE FUNCTION 
 //STEP1 - CREATE AN array 
//STEP2- CREATE A FUNCTION 
//STEP3 - PASS array NAME INSIDE FUNCTION TO REFRENCE TO original array;


const arr = [34,56,7,823,89]

function returnIndex(getArr){
console.log(`ARRAY ELEMENT PRESENT AT INDEX 1 = ${getArr[1]}`);
}//op = ARRAY ELEMENT PRESENT AT INDEX 1 = 56
returnIndex(arr);

//passing new ARRAY AS function argument
returnIndex([200, 89,34,46,54,788,233]);
//op = ARRAY ELEMENT PRESENT AT INDEX 1 = 89