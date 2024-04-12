//Loops offer a quick and easy way to do something repeatedly. 

//FIRST is forloop

//steps involved; 
//1. initialization , let i = 0;

//2. Condition verification , i < 10;

//3. execution of code inside for loop scope
// const element = i;
//     console.log(element);

//4. increment of i/index -  i++

//5. loop runs till condition is matched after that it stops execution;

// print numbers from 1-10

for (let i = 1; i <= 10; i++) {
    const element = i;
    console.log(element);
    
} // printed - 1 2 3 4 5 6 7 8 9 10


//A nested for loop in JavaScript is a loop within another loop. Nested for loops are useful for iterating through multi-dimensional data structures like arrays, tables, and matrices.

//example of nested for- loop ; print tables of 1 -10 , and for each table print the value of the table being printed before the table;

// for(let i  = 1 ; i <=10 ; i++){
//     console.log(`table of ${i} is being printed`);
//     for(let  j = 1; j <= 10 ; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

//op =table of 1 is being printed
// 1 * 1 = 1 ;  in this format tables are printed from 1-10;

//FOR LOOP ON ARRAYS

 const myArr  = ["ironman", "hulk", "captainAmerica"];
 
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element); 
}
//op = 
//ironman
// hulk
// captainAmerica

//BREAK AND CONTINUE IN LOOPS;

//The break statement terminates the loop, while the continue statement skips the current iteration and moves on to the next one.

//1. example of break statement; 
for(let i  = 1 ; i< 10; i++){
    if(i==5){
        console.log("5 detected");
        break;
    }
    console.log(i);
}
//op = 
// 1
// 2
// 3
// 4
// 5 detected


//2. example of continue 
for(let i  = 1 ; i< 10; i++){
    if(i==5){
        console.log("5 detected");
        continue;
    }
    console.log(i);
}

//op = 
// 1
// 2
// 3
// 4
// 5 detected
// 6
// 7
// 8
// 9