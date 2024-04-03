//how to print a date in javascript
//date is an object in js so we declare it using new keyword 

let date1 =  new Date()
console.log(date1.toDateString()); //Returns a date as a string value.
//o/p -> Wed Apr 03 2024

console.log(date1.toString());//Returns a string representation of a date. The format of the string depends on the locale.  o/p -> Wed Apr 03 2024 05:12:36 GMT+0000 (Coordinated Universal Time)

console.log(date1.toISOString());//Returns a date as a string value in ISO format o/p -> 2024-04-03T05:13:25.792Z

console.log(date1.toLocaleDateString());//o/p ->4/3/2024 -gives local date

console.log(date1.toLocaleString());// Converts a date to a string by using the current or specified locale  o/p ->4/3/2024, 5:15:46 AM //since default standard is in US time thats why we get a different time from ours;

console.log(date1.getDate()); //Gets the day-of-the-month, using local time. o/p =  3

console.log(date1.getTime()); //Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. o/p = 1712121522779


//IF YOU WANT A DATE TO BE PRINTED IN A SPECIFIC FORMAT DO THE FOLLOWING;
let mycreatedDate  = new Date("03-04-2023")
console.log(mycreatedDate); // o/p= 2023-03-04T00:00:00.000Z
console.log(mycreatedDate.toDateString()); // o/p = Sat Mar 04 2023

console.log(mycreatedDate.getMonth()+1); //to get exact month because month in javascript start from 0 ; o/p= 3

 const date3 = Date.now();
//how to convert milliseconds to seconds in javascript
console.log(Math.floor(date3/1000)); //op = 1712122336

//how to get a day  of a specific date
let mynewdate = new Date()
console.log(mynewdate.getDay()); //op = 3



//this is where the first basic module of javascript is terminated.