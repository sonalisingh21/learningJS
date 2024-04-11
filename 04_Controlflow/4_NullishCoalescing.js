// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

//eg. 
let val1;
//val1 = 5 ?? 10; //5 - bcz it is present in LHS

//val1 = null ?? 10; //10

//val1 = undefined ?? 10; //10

//multiple coalescing opeators;

val1 = null ?? 34 ?? undefined //34
console.log(val1); 


//TERNARY OPERATOR - SHORTHAND OF IF-ELSE STATEMENT

 //condition ? true : false;

 const coldCoffeePrice = 130
 
 coldCoffeePrice <= 100 ? console.log("100") :  console.log("150"); 
 //op =150 , else condition satisfied

