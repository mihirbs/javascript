/* differnce between let, var and const
before es6 (ECMA script 6) var is used to define variable 
 but for nowdays it is not used because it can cause bugs , it is also outdated
*/

/* const
const are used declare constants
constants are those identifiers whose values are cannot be changed through out the whole jvascript program
*/

/*let
we use let to declare blocked scoped variables
*/

console.log("javascript tutorial 3: var, let and const");
let a = 45;
let b = "Mihir";
let c = null;
let d = undefined;
{
  let b = "this";
  console.log(b);
}
console.log(b);

/*
IN this scenario we understand that let is blocked scoped variable
with The help of let we can change blocked soped variable
*/

/*
var can introduce bugs in your program
so we should always use let
we can redeclare var
*/

/*
  we cannot redeclare let
  it will throw error
  */
// but we can do this
let e = "Mihir";
e = 4;

console.log(e);
/*
we can update let
*/

// const author = "Mihir";
// let author = 5; // throws an error because constant cannot be changed
// author = 5; // throws an error because constant cannot be changed
// // const can neither be updated nor redeclare

const mihi = 0;
