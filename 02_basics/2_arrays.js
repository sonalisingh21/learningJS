//continuing on array methods; 

//different ways of merging two arrays

const myarr1 = [1,2,3,4,5]
const myarr2 = [6,7,8,9,10]

//1st way, not recommended very much because it creates multidimension arrays as it pushes entire array as 1 element of arr1 ;
//Appends new elements to the end of an array, and returns the new length of the array.

//myarr1.push(myarr2);
//console.log(myarr1);
//op= [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ] ]

//2nd way Concatenation using concat operator;
//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const myarr3 = myarr1.concat(myarr2)
console.log(myarr3);
// o/p= [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
//   ]

// 3rd way USING SPREAD OPERATOR
 const allArr = [...myarr1,...myarr2]
 console.log(allArr);
//  o/p = [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
//   ]

//4th way USING FLAT OPERATOR; Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const myArr4 = [1,2,3,[5,6,7], 8,9,[10,11,[13,14,15],16],17]
const mergedArr = myArr4.flat(Infinity);
console.log(mergedArr);
// o/p = [
//     1,  2,  3,  5,  6,  7,
//     8,  9, 10, 11, 13, 14,
//    15, 16, 17
//  ]


const name = "sonali"
// this tells if  arg is any[]
console.log(Array.isArray(name));// false


//HOW TO Create an array from an iterable object.An iterable object to convert to an array.

console.log(Array.from(name));
//o/p = [ 's', 'o', 'n', 'a', 'l', 'i' ]

//but this will fail in-case we want to make an array with key/value pair and we do not mention that we want an array of KEYS / VALUE.

