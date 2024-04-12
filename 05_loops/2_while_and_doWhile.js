//A while loop in JavaScript is a loop that executes a block of code as long as a specified condition is true. The syntax for a while loop is:
 
// basic syntax :
// 1. initialization
// 2. while (condition) {
//     // code block to be executed
//     4. increment

//   }

//example - print numbers from 1- 10 incrementing by 2

let i  = 1
 while ( i <=10) {
    console.log(` i  = ${i}`);
    i  = i+2  
 }
// output:
//  i  = 1
//  i  = 3
//  i  = 5
//  i  = 7
//  i  = 9

//WHILE LOOP IN ARRAYS

 let myArr = [0, 1, 1,3, 45, 567,8,89,10];
 let arrIndex  = 0 
 while (arrIndex < myArr.length) {
    console.log(`value of element at ${arrIndex} =  ${myArr[arrIndex]}`);
    arrIndex += 1
 }
 // output 
// value of element at 0 =  0
// value of element at 1 =  1
// value of element at 2 =  1
// value of element at 3 =  3
// value of element at 4 =  45
// value of element at 5 =  567
// value of element at 6 =  8
// value of element at 7 =  89
// value of element at 8 =  10

//The do...while loop is a programming loop that executes a block of code once, and then repeats the block until a specified condition evaluates to false. The syntax for a do...while loop is as follows:

// 1. initialisation ; 
//do {
    //2. execute this task 
    //3. increment
// } 4. while (condition check);

//do while runs atleast once no matter if it follows the condition or not
let score  =1
do {
    console.log(`score =  ${score}`);
    score+=1
    
} while (score<= 12);

//output  = 
// score =  1
// score =  2
// score =  3
// score =  4
// score =  5
// score =  6
// score =  7
// score =  8
// score =  9
// score =  10
// score =  11
// score =  12


//if score was 12 initially  also it would print score once;