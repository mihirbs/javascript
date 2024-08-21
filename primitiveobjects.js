// primitives data types and objects and its differences

//primitive in js


// there are 7 types of primitives data types in javascript
// nn bb ss u
// null, number, boolean, bigint, string, symbol, undefined
 // what is a data type? what type of data is a variable holding
let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567") + BigInt("3")
let e = "mihir"
let f = Symbol("I am a nice symbol")
let g = undefined
console.log(a, b, c, d, e, f, g)
console.log(typeof d)
// null means nothing , its no value
// undefined means nothing is defined


// objects in js
// objects are non primitive data types in java script
const item = {
  "mihir": true,
  "shubh": false,
  "lovish": 67,
  "rohan": undefined
}
console.log(item["mihir"])

// with the help of objects we can make key value pairs (mapping , lookupe))