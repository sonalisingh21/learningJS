//ARRAYS ARE CONTAINERS FOR HOLDING MULTIPLE VALUES IN A SINGLE VARIABLE;

//different ways of declaring array 
//const myArr  =[2, "sonali", true , Object] etc; 
const myARR = new Array(2,3,4,5,6,)

//how to access an element in array - via index, and index in arrays start from 0 always;
console.log(myARR[0]); //op = 2

//Array methods

//to get length of array 
console.log(myARR.length);// op = 5

//to insert element in an array ; 
myARR.push(9)
myARR.push(10)
myARR.push(11)

//how to print an array 
console.log(myARR); //op [ 2, 3,  4,  5,6, 9, 10, 11]


//to remove last element inserted in array
myARR.pop()

console.log(myARR); // 11 is removed from the array

//to insert an element in the beginning and returns the new length of the array.
myARR.unshift(99) //99 added at first index

//to remove an element present in the beginning
myARR.shift() //99 removed from the array, if 99 wasnt there it would have shifted any element present at 1st index;

console.log(myARR);

//to Determine whether an array includes a certain element, returning true or false as appropriate.
console.log(myARR.includes(83)); 

// to Return the index of the first occurrence of a value in an array, or -1 if it is not present.
console.log(myARR.indexOf(3)); // o/p=  1

//how to Add all the elements of an array into a string, separated by the specified separator string.
const mynewArr = myARR.join()  
console.log(mynewArr);// op 2,3,4,5,6,9,10
console.log(typeof mynewArr); // op = string


//slice and spice methods
console.log("a ", myARR );

//slice method ==> Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
const myn1 = myARR.slice(1,3)
console.log(myn1); // op  [ 3, 4 ] 
console.log("b", myARR); //array did not change

//  b [
//   2, 3,  4, 5,
//   6, 9, 10
// ]


// splice method= Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
const myn2 = myARR.splice(0,3)
console.log(myn2); // op = [ 2, 3, 4 ]

console.log("c", myARR);

// o/p 
// c [ 5, 6, 9, 10 ] - new array is printed excluding the elements that are spliced