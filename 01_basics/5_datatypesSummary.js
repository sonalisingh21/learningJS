// there are two types of datatype
//PRIMITIVE AND NON-PRIMITIVE;

//primitive datatypes- num, bigInt , String , object , null, boolean, undefined , symbol

// we have already discussed examples of primitive datatypes in previous datatypes file

// symbol - used to find uniqueness in react components;
const id = Symbol(123)
const id2 = Symbol(123)
console.log("comparing id and id2")
console.log(id == id2); //gives false because they aren't equal

//non primitive - these are refrenct variables; - array , object , functions

//examples  

//1. arrays 
const heros =["shaktiman", "ironman", "peterpan"]

//2. objects - we write in ey value pairs

let myObj = 
{
name:"sonali",
age:"22",
}

//3. function - storing function in variables
const myFunction = function(){
    console.log("namaste world");
    
}