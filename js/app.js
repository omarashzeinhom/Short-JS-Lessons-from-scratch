//VARS
// const , let & var.

//basic variables 
const a = ""
let b = "";
var c = "";


//SCOPES
// GLOBAL , LOCAL ,FUNCTION, & BLOCK SCOPES



//LOCAL


const constant = 1; // CANNOT Resassign it , however if its an  object, or array we can change their props.
//constant = 5 ; //wont work 
console.log(constant);






// GLOBAL

var y = 10; // CAN BE CHANGED
y = 17;


let z = 10; // CAN BE CHANGED
z = 16;




{
    //BLOCK SCOPE
    var x = 10;
}


function funcScopVarTest() {
    //FUNCTION  SCOPE
    const funcScopVar = 100;
    console.log("Button Has Been Clicked and funcScopVar -----> = " + funcScopVar);

}

//console.log(x,y,z);










const string = "strings";
let boolean = true;
const array = [];
const objectArray = [
    {
        objectname: "string name",
        objectprop2: "prop2",
        objectno: 1,
        objectboolean: true,
        objectArray: ["array item 1"],

    }
]

//console.log(objectArray);


if (boolean === true) {
    //console.log(string);

}




/***
 *
 * Variable 	Explanation 	Example
String       	This is a sequence of text known as a string. To signify that the value is a string, enclose it in single quote marks. 	let myVariable = 'Bob';
Number 	       This is a number. Numbers don't have quotes around them. 	let myVariable = 10;
Boolean 	This is a True/False value. The words true and false are special keywords that don't need quote marks. 	let myVariable = true;
Array 	This is a structure that allows you to store multiple values in a single reference. 	let myVariable = [1,'Bob','Steve',10];
Refer to each member of the array like this:
myVariable[0], myVariable[1], etc.
Object 	This can be anything. Everything in JavaScript is an object and can be stored in a variable. Keep this in mind as you learn. 	let myVariable = document.querySelector('h1');
All of the above examples too.
 */



//Refernces

/**
 * https://www.codecademy.com/resources/blog/your-guide-to-semicolons-in-javascript/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 * https://www.programiz.com/javascript/variable-scope
 * https://www.w3schools.com/js/js_scope.asp
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variables
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */


//RECAP

//VARS
// const , let & var.

/// Next Videos

//SCOPES
// GLOBAL , LOCAL ,FUNCTION, & BLOCK SCOPES


//objects
/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 */


//properties example



//Numbers & Operators
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math



























































