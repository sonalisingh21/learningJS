//1. if statement 
// if(2 === "2"){
// console.log("executed");
// } //nothing executed;

//trying with == operator
if(2 == 2){
    console.log("executed");
    } // executed

//boolean operator
const isloggedIn = true

if(isloggedIn){
    console.log("executed");
} //executed

//trying with more arithmetical operators
if(3!=2){
    console.log(true);
} //true


if(2!== "2"){
    console.log(true);
}

//else STATEMENT - gets executed when if(condition) is false
const temp = 55;
if(temp<45){
    console.log("temperature is  less than 45 degrees");
}
else{
    console.log("temperature is greater than 45 degrees");
}

//if condition was true so op = temperature is  less than 45 degrees

//if we change temp = 50 ; else condition gets executed
//op = temperature is greater than 45 degrees


//IMPLICIT SCOPE- javascript assumes scope is already there, usually used for one line code execution;

const balance = 1000
 if(balance>500) console.log("test");

 // NESTED CONDITONS 
 // Nested if-else statements can be used to create complex conditional logic. They can be used to check multiple conditions and execute different code blocks depending on the results of those conditions.

 // e.g multiple score check
 const score = 15;

 if(score<10){
    console.log("less than 10");
 }
 else if(score<20){
    console.log("less than 20");
 }
 else if(score<30){
    console.log("less than 30");
 }
 else if(score<40){
    console.log("less than 40");
 }
 else{
    console.log("less than 50");
 }
 //op = less than 20

 //checking multiple conditions using && operator; it executes a program only if both conditions are true;

  const userLoggedIn = true
  const hasdebitCard = true

 if(userLoggedIn && hasdebitCard){
    console.log("allowed to buy item");
 }
 else{
 console.log("denied to buy item");
 }
// op =allowed to buy item;  because both conditions are true

//checking multiple conditions but even if only one condition is true , code will be executed; BUT ATLEAST ONE CONDITION HAS TO BE TRUE;

const gmail = true
const fb = false
const insta  = false

if(gmail || fb || insta){
    console.log("user is logged in");
}
//op =  user is logged in , becausee gmail condition was true;
