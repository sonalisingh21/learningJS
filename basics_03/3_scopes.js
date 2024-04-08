

// there are two types of scopes - block scope and global scope;

let a = 32
const b = 45

if(true){
  let a = 67
    console.log("A inner: ",a);
  const b = 34
    console.log("B inner: ",b);
}
console.log("A outer: ",a);
console.log("B outer: ",b);
// A inner:  67
// B inner:  34
// A outer:  32
// B outer:  45

//WHATEVER IS WRITTEN INSIDE {} IS WRITTEN IN BLOCK SCOPE and whatever is written outside is written in GLOBAL SCOPE

//ANYTHING DECLARED INSIDE BLOCK SCOPE CANNOT BE ACCESSED OUTSIDE WHERE AS ANYTHING DECLARED INSIDE GLOBAL SCOPE CAN BE ACCESSED EASILY BY BLOCK SCOPE;

//E.g

//this can be better understood with functions;
// basically parent function cannot access child function values but child function which is inside the parent function can access all the values of parent

function one(){
    const name = "sonali"
    function two(){
        const website = "google.com"
        //printing name declared inside parent function, because child can access all parent function values;
        console.log(name);
    }

    //parent function accessing child function's value
  //  console.log(website);

    // executing child function
   //sonali two()
}

//executing parent function ;
one();

// errors 
//1.   console.log(website);ReferenceError: website is not defined
//WEBSITE CANNOT BE ACCESSED outside child function block scope {}

//2. two()  op= sonali ; prints output because it is called 

//3. if we do not call two, one() will get executed but since two() is not called it is not printing anything;

//storing functions inside variables - it becomes kind of an expression
//it is not possible to access that expression before it's declaration , whereas we can delare a function and access it anywhere inside the code file;

//console.log(func(34));
//op = ReferenceError: Cannot access 'func' before initialization
const func = function(num){
    return num +1
}

console.log(func(34));// op = 35

//WHY DO WE NOT USE var;var c = 67 because var prints latest value of a variable irrespective of SCOPES; which is problematic because value of var is easily updated 

var c = 23;
if(true){
    var c = 99
}
console.log(c); //op = 99


