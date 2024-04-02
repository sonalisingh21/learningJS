// declaring a number datatype explicitly

const num = new Number(100)
console.log(num);
//output- [Number: 100]

// number datatype consist of a few properties

//.tostring converts the number into a string 
console.log(num.toString());
// output - 100

//we can further perform string methods on this; eg- find its length
console.log(num.toString().length);
//output 3

// to fixed method; fixes the decimal digits upto give number here- 3; 
console.log(num.toFixed(3)); //output - 100.000

//precision - returns a string value of a number , similar to fixed but focuses on initial digits for precision; can return exponential values sometimes

 const num2 = 348.678
 console.log(num2.toPrecision(3)); //op 349

 const num3 = 11348.678 
 console.log(num3.toPrecision(3)); 
 //op - exponential value 1.13e+4

 //toLocaleString method ; converts it to locale string; according to us standards but we can also conver a number according to indian number system

 const hundred = 1000000
 console.log(hundred.toLocaleString('en-IN')); //op = 10,00,000

 //there are a lot of functions associated with numbers; like max value , min value, safe integer, epsilon value etc.

 //MATH LIBRARY IN JAVASCRIPT

 //1. math.abs - converts negative value to positive
 console.log(Math.abs(-45)); // op->  45

 //2. math.round - rounds off the number
 console.log(Math.round(7.65)) // op = 8

 //3. math.ceil - controls upper value after decimal in a number;
 console.log(Math.ceil(7.65)) // op = 8

 //4. math.floor - controls lower value of number before decimal
 console.log(Math.floor(7.65)) //op = 7


//5. math.random - generates random value in a range of 0-1;
console.log(Math.random()) // op = 0.9941022167940299

// if you want to generate a random number  THAT IS AN WHOLE NUMBER BETWEEN A GIVEN RANGE ; USE THE FOLLOWING FORMULAE

 //declare the range;
 const max = 20
 const min = 10

 //formulae
  console.log(Math.floor(Math.random()*(max - min + 1))+ min);
  //output on several runs are - 13,17,19 etc

  /* there are other methods in math library like 
  Math.sqrt
  Math.PI
  Math.cbrt
  Math.LOG10E
  Math.exp
  Math.sin etc */
  




