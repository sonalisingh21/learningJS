//THIS KEYWORD; used when we want to access to current context of an object
//whenever we want to access any of the variables inside current context (object for now) we have to use = this.name
const user = {
  name: "SONALI",
  price: 999,

  welcomeMSG: function () {
    console.log(`${this.name} ,WELCOME TO THIS WEBSITE`);
    console.log(this);
  },
};
console.log(user.welcomeMSG()); //op = SONALI ,WELCOME TO THIS WEBSITE

//what if we change the value of name;
//op = sam ,WELCOME TO THIS WEBSITE, user.name will be updated;
user.name = "sam";
console.log(user.welcomeMSG());

// console.log(this) inside the object , gives an output like following =>  { name: 'sam', price: 999, welcomeMSG: [Function: welcomeMSG] }

console.log(this); // op= {}

//but same thing inside browser gives => Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

//this is because inside node enviornment this points to an empty object;

//while being inside an object, this points to current context (all values inside the object)

//and inside browser this points to a global  object windows;

//NOTE: THIS KEYWORD DO NOT WORK FOR FUNCTIONS; LET'S SEE HOW

function user1() {
  username: "sonali_singh";
  console.log(this.username); //undefined
}

//this keyword inside a function does not knows what username it is trying to point on therefore it is undefined

//to reference a value inside functions we can use ARROW FUNCTIONS

//arrow functions basically  allow us to write shorter function syntax

//following are various syntaxes of arrow function :

//1. syntaxt I = explicitly return - using return keyword;

const addition = (num1, num2) => {
  return num1 + num2;
};
console.log(addition(3, 6)); // op = 18


//syntax II - implicitly  return- without using return keyword
 const add2 = (num1, num2) => num1 + num2 ;
 console.log(add2(5,6)); //op = 11

 // syntax III - implicitly return way II
 const add3 = (num1,num2) => ( num1 + num2);
 console.log(add3(3,17)); //op = 20

 //ARROW FUNCTION WITHOUT PARAMETERS

const print = () => (console.log(`hello`));
console.log(print());

//ARROW FUNCTION WITHOUT PARENTHESES 

//if you have only one parameter, you can skip the parentheses as well
const hello  = val => "HELLO" + val;
console.log(hello('SAM')); //OP = HELLOSAM

//HOW TO RETURN OBJECTS WITH ARROW FUNCTIONS

const two = () => ({username:"sonali"});
console.log(two()); //{ username: 'sonali' }

