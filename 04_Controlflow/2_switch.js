// IF-ELSE CONDITION WITHOUT THE IF-ELSE KEYWORDS USING SWITCH STATEMENT

const month = 2

switch(month){
    case 1 : console.log("jan");
    break;

    case 2 : console.log("feb");
    break;

    case 3 : console.log("march");
    break;

    case 4 : console.log("apr");
    break;

    default: console.log("default");
    break;

}
// op =feb

//break statement is used for stopping the code execution after a case  is matched; if break statement were not there, all the code written after the matched condition will also be executed;

//default case exists because there should be something printed even if no condition matches;

//you can match any datatype, e.g strings

const day = "mon"
switch(day){
    case "mon" : console.log("MONDAY");
    break;

    case "tue" : console.log("TUESDAY");
    break;

    case "wed" : console.log("WEDNESDAY");
    break;

    case "thurs" : console.log("THURSDAY");
    break;

    default: console.log("weekend");
    break;

}
//op = MONDAY