// THERE ARE TWO TYPES OF MEMORY - stack memory and heap memory;

//primitive datatypes like string boolean number etc are stored in stack; whenver we try to access a primitive datatype storing it into another variable , **WE GET A COPY OF ORIGINAL DATATYPE**
 let name = "sonali"
console.log(name)
 let name2 = name;
 console.log(name2);

 // when we make changes in name2; we are making changes in COPY OF ORIGINAL VARIABLE; AND NOT ORIGINAL VARIABLE; that's why there is not change in name; but there is a change reflected in name2; 
 name2 = "raavya"
 console.log(name2);


 // non primitive datatypes like string arrays object are stored in heap memory; when we create a copy of original object; both object point to same data inside the heap; and any change made by one object is reflected in other object also;
 let obj1 = {
    email: "sonalii@gmail.com"
 }
 //printing original object
 console.log(obj1.email);

//making a copy of original object that is also pointing to same data inside heap memory;
 let obj2 = obj1

 //making change in object2 which also changes obj1 because both are pointing to same thing in heap;
 obj2.email = "sonalisingh@gmail.com"
 

 //both obj1 and obj2 prints the updated value of original object;
 console.log(obj2.email)
 console.log(obj1.email)
