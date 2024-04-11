//object destructuring is done to make the code clean ;

const course ={
    course_instructor:'sonali',
    course_fee :999,
    course_name: "JS_series"
}
// to access these we have to type course.course_instructor AGAIN AND AGAIN

//here comes the concept of destructuring; it is syntactically right and is a neat and clean code practice

const {course_instructor : instructor} = course
//now you can directly access instructor by mentioning this
console.log(instructor);