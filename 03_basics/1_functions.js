function myname() {
  console.log("s");
  console.log("o");
  console.log("n");
  console.log("a");
  console.log("l");
  console.log("i");
}

//executing a function
myname();

// o/p =
// s
// o
// n
// a
// l
// i

//functions are created when we want to do same thing in a repitive manner without duplicating the code again and again

//sum two numbers

//THREE WAYS OF USING FUNCTIONS;
//1. printing the result inside function
function sumtwonumbers(num1, num2) {
  console.log(num1 + num2);
}
sumtwonumbers(3, 4); //op = 7

//storing it in result variable and printing it ;
function sumtwonumbers(num1, num2) {
  console.log(num1 + num2);
}
const result = sumtwonumbers(3, 5);
console.log(result);

//we can also return the function using a variable

function addition(num1, num2) {
  const ans = num1 + num2;
  return ans;
}
const ans = addition(3, 97);
console.log("answer is", ans); //answer is 100

//but there is a problem
const ans1 = addition(3, "a");
console.log(ans1); // op= 3a
//this happened because we did not mentioned that the datatype of two arguments passed in function should be number;

//argument - when we pass some values for taking an output from the function ;addition(3,"a"), these are arguments;

//paramethers - values that we pass in a function while giving input;function addition(num1, num2)

//different ways of taking an input

function loginusermsg(username) {
  return `${username} just logged in`;
}
const msg = loginusermsg("sonali");
console.log(msg); //sonali just logged in

// or you can also directly print it
console.log(loginusermsg("sonali")); //sonali just logged in

//if someone enters an empty string;
function loginusermsg(username) {
  //username ===undefined, === is used when condition is true;! is used to negate this ; and !username means the same you can use any one of the following
  if (username === undefined) {
    console.log("enter a username");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginusermsg());
//output: enter a username
//          undefined

//NO CODE CAN BE EXECUTED AFTER RETURN STATEMENT;

//passing default value in function parameters in javascript
function loginmsg(username = "neha") {
  if (!username) {
    console.log("enter-username");
    return;
  }
  return `${username} just logged in`;

}

console.log(loginmsg());
//neha just logged in

//here in this case function will never go under the undefined condition because by default value is set to "neha"