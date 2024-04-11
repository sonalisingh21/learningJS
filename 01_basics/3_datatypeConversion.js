let score = 89
console.log(typeof (score));


// case 1 if we want to convert a string into number;
//we use datatype conversion for this purpose
let number = "34sfg"
let valueinNum = Number(number)
console.log(valueinNum); 

//output will be NaN because even after getting converted to a number it will not actually become a number;

//CASE 2. number = null

let num1 = null
let valueinNum1 = Number(null);
console.log(valueinNum1); // gives 0 ;

//case 3. when number is undefined;

let num2 = undefined;
let valueinNum2 = Number(num2)
console.log(valueinNum2); //gives NaN because undefined is not a number;

//case4. string to number
let tree = "banyan"
//let valueinTree = Number(valueinTree)
//console.log(valueinTree) ; //string  cannot be converted  to number


//case5. number to boolean value
let redBall = 1;
let isRedBall = Boolean(redBall);
console.log(isRedBall); //gives true because 1 = true in boolean representation;

//case5.  boolean  to number
let blueball = false;
let isblueball = Number(blueball);
console.log(isblueball); //gives 0; because false in boolean = 0;




