
/**
 * describes JavaScript's expressions and operators, including assignment, comparison, arithmetic, bitwise, logical, string, ternary and more.

At a high level, an expression is a valid unit of code that resolves to a value. There are two types of expressions: those that have side effects (such as assigning values) and those that purely evaluate.
 * 
    Assignment operators
    Comparison operators
    Arithmetic operators
    Bitwise operators
    Logical operators
    BigInt operators
    String operators
    Conditional (ternary) operator
    Comma operator
    Unary operators
    Relational operators

    ACABL BSCCUR
 */


//Assignment Operators
// = , -=, += , *= , /=, %= , **= 
//The += assignment operator can also be used to add (concatenate) strings:


let xyz = 20;
xyz -= 5;
console.log(xyz)



//Arithmetic Operators 
// + , - , *, **, / , %, ++ , --,
//Assign Strings
let stringZ = "I want";

console.log( stringZ + " " + "a" +  " " + "Pencil");
console.log( 25 / 100 + 25 + 25 * 50);



// Assign Properties to an Object using Assignment Operators 
const Player = {};

//Player.ko = "Player got koed"
Player.ko = " Player did not get koed"

console.log(Player);





// Comparision Operators

// ==, ===, !=, !== , > , < , >=, <= , ?


// Logical Operators
// &&, || , !

if (Player != null || Player.ko !=  "Player got koed"){
   console.log(">>>>>> Object is >>>>>>" + JSON.stringify(Player) );

}





// Type operators 
// instanceof , typeof


console.log(typeof(Player));



// BitWise Operatos 













































/***************
 * 
 * MDN DOCS
 * 1. [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
 * 2. [JavaScript Operators](https://www.w3schools.com/js/js_operators.asp)
 * 
 * 
 * 
 */