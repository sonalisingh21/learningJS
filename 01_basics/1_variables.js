const account_id = 23456

// two ways of declaring a variable - using let, using var;

let account_email = "sonali@singh.com"
var  account_password= "sdfwergfb"

//NOT MENTIONING LET OR VAR WILL STILL PRINT BUT IT IS A POOR PROGRAMMING TECNIQUE
account_city = "BHOPAL"

//PRINT ANYTHING IN JAVASCRIPT USING CONSOLE.LOG() METHOD;
//console.log(account_id);

//UPDATING values IN JS; 
//1. CONST CANNOT BE UPDATED

//2. YOU CAN UPDATE STRINGS

account_email = "ss@awa.in"
account_city= "khalistaan"
account_password = "varying"

// how to print multiple things together in js;

console.table([account_id, account_email, account_password, account_city]);