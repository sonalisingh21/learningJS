// IIFE - IMMEDIATE INVOKED FUCNTION EXPRESSION - A JavaScript IIFE (Immediately Invoked Function Expression) is a function that runs the moment it is invoked or called in the JavaScript event loop. Having a function that behaves that way can be useful for several use cases

// WHY DO WE USE IIFE?
// 1. TO EXECUTE A FUNCTION IMMEDIATELY 
// 2. TO AVOID GLOBAL SCOPE POLLUTION THAT cause troubles in function execution inside the scope

//SYNTAX OF IIFE
//( function function_name( parameters){function code})(execution call or arguments); ";" denotes stop after execution, it is important to use ";" because IIFE knows where to begin but not where to stop, to stop a code from further execution we explicitly put ";". 

//here we have named our IIFE function as hello , therefore it is named IIFE
(function hello(username){
    console.log(`namastey ${username}`);
})('Sam'); //namastey Sam

//UNAMED IIFE
((name)=> {
    console.log("hello", name);
})('SARAH'); //OP = hello SARAH

//IIFE in ARROW FUNCTIONS
((num1, num2) => console.log((num1+ num2)) )(3,4); //7