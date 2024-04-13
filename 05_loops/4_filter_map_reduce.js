const nums = [1,2,3,4,5,6,7,8,9,10]

/*filter  is  function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
Returns the elements of an array that meet the condition specified in a callback function.*/

//syntax  :const variable_name =  nums.filter((args)=> condition)

const newNum = nums.filter((numbers)=> numbers>4)
console.log(newNum); //[ 5, 6, 7, 8, 9, 10 ]

//PUSHING ELEMENTS OF OLD ARRAY INTO NEW ONE
const arr = []
nums.forEach( (num) =>
{
    if(num>4){
        arr.push(num)
    }
}
)
console.log(arr); //[ 5, 6, 7, 8, 9, 10 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 }, 
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  //filtering books having genre as "history"
  const userBook =books.filter((bk) => bk.genre==='History')
 // console.log(userBook);
  /* WE GOT AN ARRAY OF BOOKS OF HISTORY GENRE
  [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
] */

//filter books published after 2000
let Book1 =books.filter((bk) => bk.publish>2000)
  console.log(Book1);

  /*[
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
] */

//multiple conditions while filtering - publish after 1995 and genre:science
let Book2   = books.filter((bk)=>{
 return bk.publish>=1995 && bk.genre==='Science'
})

console.log('BOOK2', Book2);
/**
 * BOOK2 [
  {
    title: 'Book Five',
    genre: 'Science',
    publish: 2009,
    edition: 2014
  },
  {
    title: 'Book Eight',
    genre: 'Science',
    publish: 2011,
    edition: 2016
  }
]
 */


//MAPS :Calls a defined callback function on each element of an array, and returns an array that contains the results.
//IF WE WANT TO ADD 10 TO EACH ELEMENT OF ARRAY AND THEN RETURN THE RESULT

const mynums = [1,2,3,4,5,6,7,8,9,10]
const newNUM = mynums.map((num)=>num+10)
console.log(newNUM);
/*
 [
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
 */

//CHAINING OF MULTIPLE FUNCTIONS LIKE FILTER , MAP 
//Method chaining is a programming strategy that simplifies and embellishes your code. It is a technique where you can call multiple methods on the same object one after the other, without having to assign the result of each method call to a variable because result of previous method will directly be applicable on new method arguments. This can make your code more readable and concise.

//example, multiply each element of array by 10 then add 1 to each  number and print only those numbers that ARE greater than 40

let answer = mynums.map((num)=>num*10).map((num)=>num +1).filter((num)=>num >= 40)
console.log("result array = ", answer);

/**result array =  [
  41, 51,  61, 71,
  81, 91, 101
]

*/

//reduce() -> Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function. 
//initalvalue of accumulator is usually assigned as  0 ;
 //printing value of accumulator  and currentvalue ; currentvalue = element at a particular index 

let array = [1,2,3]
const ans  = array.reduce((accVal, curVal)=> 
{   console.log(` accumulator value = ${accVal}, currentValue = ${curVal}`);
    return accVal+ curVal} ,0 );
console.log(ans);
/**accumulator value = 0, currentValue = 1
 accumulator value = 1, currentValue = 2
 accumulator value = 3, currentValue = 3
6*/

let resultant = array.reduce((accVal, curVal)=> accVal + curVal , 0 )
console.log(resultant); //6


//MORE PRACTICAL EXAMPLE Of reduce

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

//ADD PRICES OF ALL THE COURSES PRESENT INSIDE SHOPPING CART

let cartPrice = shoppingCart.reduce((accVal , item)=> accVal+ item.price , 0)
console.log(cartPrice); //22996