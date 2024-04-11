// CONCATENATION OF STRINGS 2 METHODS;

//1. OLD VAGUE WAY OF CONCATENATING STRINGS

const name = "yaradh"
let repo_count = 90
console.log(name+repo_count);

//2. modern, organised and neat method of concatenation

console.log(`hello my name is ${name} and my repository count is ${repo_count}`);

//ANOTHER WAY OF DECLARING THE STRINGS;
// using objects ;

const gameName = new String("sonali21")

//string methods

// for calculating length of the string
console.log(gameName.length);

//for finding index of a character in string
console.log(gameName.indexOf('a'));

//for finding character at  a given index;
console.log(gameName.charAt(3));

//for getting a substring from original string
console.log(gameName.substring(0,4));
//last index is not included in printing the substring so it basically prints only 0 to 3;


// if u want only a specific portion , including negative numbers as well; number from end = negative numbers;
console.log(gameName.slice( 0, -3));


// if u want to trim the unnecessary spaces present at left or right sides of  the strings use trim method;

const newname = "  aradhsi  "
console.log(newname.trim());

//replace method -replaces a char/sequence of chars
console.log(gameName.replace('ona','neha'));

//includes- gives boolean value of whether some char/sequence of chars is present inside the string or not
console.log(gameName.includes('ona'));

//split - splits the data in form of an array on basic of space, dash, characters etc; 
 const name2 = "sonali-singh"
 console.log(name2.split('-'));
 //output [ 'sonali', 'singh' ]


