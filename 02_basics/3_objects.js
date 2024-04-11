//ALL ABOUT OBJECTS IN JS;

//There are two types of objects.
// a. singleton - object made using constructor,

//b. object - which consist of multiple properties/object literals inside the object; they are present in form of key value pairs;

//how to declare singleton object;
 Object.create();

//how to declare object literals, using comma seperated  values
const JSuser = {
    name:"sonali",
    email:"dvaergedf@gmail.com",
    location:"Bhops",
    isloggedin:true
}
console.log(JSuser.email);
console.log(JSuser.isloggedin);
console.log(JSuser.name);
console.log(JSuser.location);

// o/p = 
// dvaergedf@gmail.com
// true
// sonali
// Bhops



//how to declare symbol in javascript;
//[mySymbol]: mykey1
const mySym= Symbol("key1");

const JSuser = {
    name:"sonali",
    email:"dvaergedf@gmail.com",
    [mySym]:"mykey1",
    location:"Bhops",
    isloggedin:true
};
//second way of accessing javascript objects;
console.log(JSuser["email"]);// op = dvaergedf@gmail.com

console.log(JSuser.mySym); //op = mykey1 but; 
console.log(typeof JSuser.mySym); //it is stored as string and not an object

//how to declare symbol in javascript;
//[mySymbol]: mykey1

console.log(JSuser[mySym]);
console.log(typeof JSuser[mySym]);

console.log(JSuser);
//here we see symbol is refrencing to it declaration outside the object  [Symbol(key1)]: 'mykey1'

//how to change object value; object values can be overriden by "=" operator; for e.g
JSuser.email = "rsefbdfbfdb@gmail.com"

console.log(JSuser["email"]); // o/p rsefbdfbfdb@gmail.com

//if you want to stop any changes to be made in object you can freeze the object;FREEZE -Prevents the modification of existing property attributes and values, and prevents the addition of new properties.

Object.freeze(JSuser);
JSuser.email = "fgnnetynetnn@dfbadf.com"
console.log(JSuser["email"]); //op = rsefbdfbfdb@gmail.com;  email is same as before

//how to build functions using objects; 
//if object is freezed function will not work; unfreeze it before using

JSuser.greeting = function(){
    console.log("namastey world");
}


console.log(JSuser.greeting);// op = undefined
console.log(JSuser.greeting()); //op = namastey world

JSuser.greeting2 = function() {
    console.log(`hello! JSuser, ${this.name}`);
}
//this refers to properties of that particular object
console.log(JSuser.greeting2()); // op = hello! JSuser, sonali

//DIFFERENT WAYS OF DECLARING OBJECT IN JAVASCRIPT

//1. SINGLETON 
const appUser1  = {};

//2. object literals
const symbol2 = Symbol("key2")
const appuser2= {
    id: "233554abc",
    name :"sorayv",
    loggedIn:true,
    [symbol2]:"mykey2"

}

console.log(appuser2);

//NESTED OBJECTS 
const appuser3 = {
    email:"dfsggsdfbf@gma.com",
    name:{
        fullname:{
            firstname :"sonali",
            lastname : "singh"   
        }
    }
}
//how to access nested object
console.log(appuser3.name.fullname.firstname); //sonali
console.log(appuser3.firstname);  //undefined

//how to merge two objects 
//using assign, it Copies the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.


const obj1 = {
    1:"a",
    2:"b"
}
const obj2 ={
    3:"c",
    4:"d"
}



const obj3 = Object.assign({}, obj1 , obj2)
console.log(obj3); // op= { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//you can also merge objects using spread operator; just like arrays
const obj4 = {...obj1, ...obj2}
console.log(obj4); //op = { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//ARRAY OF OBJECTS 
const user = [
    {id: 1,
    email:"dvadv@erv.com"},
    {
        firstname:"sonali",
        lastname: "singh"
    }, 
    {
    id:3,
    email:"dfvafdfvv.in"
    }

]

console.log(user[1].firstname);// o/p sonali

//how to print array of only keys/values or key-value pair as an individual array

//.keys method Returns the names of the enumerable string properties and methods of an object
console.log(Object.keys(appuser2)); //op = [ 'id', 'name', 'loggedIn' ]

//.values method - Returns an array of values of the enumerable properties of an object
console.log(Object.values(appuser2));// op = [ '233554abc', 'sorayv', true ]

//if you want both , .entries - Returns an array of key/values of the enumerable properties of an object
console.log(Object.entries(appuser2));

//if you want to check that a  property is inside an object or not;hasOwnProperty- Determines whether an object has a property with the specified name.
console.log(user[0].hasOwnProperty('email')); //true