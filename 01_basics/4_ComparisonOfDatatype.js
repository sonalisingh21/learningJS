// case1. Comparing same datatypes 
console.log(2>3);
console.log(2<3);
console.log(2>=3);
console.log(2<=3);
console.log(2==3);

// output -:
// false
// true
// false
// true
// false


//case2. COMPARING VALUES WITH NULL;

console.log(null >0) //false
console.log(null >= 0) //true
console.log(null == 0) 
//false because it is checking equality of two different datatypes; sometimes it converts 0 to NaN and sometimes to 0;

// == and === work differenly in javascript;
// == compares the value ONLY
console.log("2"== 2); //gives true

// WHEREAS === compares value as well as the datatype;
console.log("2"=== 2); //gives false because datatypes are different;




