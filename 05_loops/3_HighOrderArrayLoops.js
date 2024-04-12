//3_HighOrderArrayLoops.js

// FOR OF LOOP  - The for...of loop in JavaScript is used to iterate over iterable objects. Iterable objects are objects that can be iterated over, such as arrays, strings, maps, and sets. The for...of loop iterates over the values of an iterable object, and for each value, it executes a block of code.

const arr = [1,2,3,4,5,6,7,8,9,10]
// for (const iterator of object) {
    //work to be done
// }
// for (const num of arr) {
//     console.log(num)
// }
//num  iterated over all values of arr 
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


//for- of loop on string
const greeting = "namastey World"
// for (const greet of greeting) {
//     //optional -tring if and break in for of loop
//     if(greet == " ")
//     { console.log("space detected");
//         break;
//     }
//     console.log(`each char is ${greet}`);
 
// }
// output:
// each char is n
// each char is a
// each char is m
// each char is a
// each char is s
// each char is t
// each char is e
// each char is y
// each char is  
// each char is W
// each char is o
// each char is r
// each char is l
// each char is d

//output of if and break statement 
// each char is n
// each char is a
// each char is m
// each char is a
// each char is s
// each char is t
// each char is e
// each char is y
// space detected


//FOR OF LOOP ON MAPS 

 const map  = new Map();

 //setting key value pairs in map
 map.set('in','India')
 map.set('fr','france')
 map.set('nyc','new york city')

 // fetching values of keys on map
 //console.log(map.get('in')); //India

 //for of loop on maps
  for (const [key,value] of map) {
    console.log(key,":- ", value);
  }

//op:in :-  India
//   fr :-  france
//   nyc :-  new york city

//FOR OF LOOP ON OBJECTS

// const myobj = {
//     game1: "candy crush",
//     game2:"2048",
//     game3: "bottle_filling"
// }

//OBJECTS ARE NOT ITERABLE BY THIS SYNTAX;
// for (const  [key, value] of object) {
    
// }



//FOR- IN LOOP The for...in statements combo iterates (loops) over the properties of an object.The code block inside the loop is executed once for each property.

//accessing object properties using for-in loop
const myobj = {
        game1: "candy crush",
        game2:"2048",
        game3: "bottle_filling"
    }
for (const key in myobj) {
    console.log(key);
}
// game1
// game2
// game3 , printed all the keys of object
for (const key in myobj) {
    console.log(`${key} is ${myobj[key]}`);
}
// output :
// game1 is candy crush
// game2 is 2048
// game3 is bottle_filling

//FOR IN LOOP IN ARRAYS; 
const myArr2  = [1,2,,4,5,6,8,9]
for (const key in myArr2) {
    console.log(key);
}
//gives the INDEXES OF ARRAY 
// 0
// 1
// 3
// 4
// 5
// 6
// 7

//TO GET VALUES 
for (const key in myArr2) {
    console.log(myArr2[key]);
}
// output:
// 1
// 2
// 4
// 5
// 6
// 8
// 9

//maps are not iterable just by printing keys; 


//FOR EACH LOOP 
//syntax: method) Array<string>.forEach(callbackfn: (value: string, index: number, array: string[] 
// forEach() method takes a callback function as an argument. The callback function is a function that is executed for each element in the array. In this case, the callback function simply prints the element to the console.
// The forEach() method is a convenient way to iterate over an array and perform an operation on each element of the array. It is a more concise and readable way to write a for loop.

const arr1 = ["js", "java", "python", "cpp", "c#"]
 arr1.forEach( function(val){
    console.log(val);
    }   
 );
//  output:
//  js
// java
// python
// cpp
// c#

//second syntax using ARROW FUNCTION
arr1.forEach( (vals) => {console.log(vals);})

// output:
// js
// java
// python
// cpp
// c#

//syntax3 - PASSING REFRENCE OF ANOTHER FUNCTION 
 function greet (item){
   console.log(item);
 }
 //only pass refrence of function, do not execute it with ()
arr1.forEach(greet);

// output:
// js
// java
// python
// cpp
// c#

//multiple arguments in for - each loop 

  arr1.forEach( (languages , index, arr1) => {console.log(languages , index, arr1);})

//   output:
//   js 0 [ 'js', 'java', 'python', 'cpp', 'c#' ]
// java 1 [ 'js', 'java', 'python', 'cpp', 'c#' ]
// python 2 [ 'js', 'java', 'python', 'cpp', 'c#' ]
// cpp 3 [ 'js', 'java', 'python', 'cpp', 'c#' ]
// c# 4 [ 'js', 'java', 'python', 'cpp', 'c#' ]