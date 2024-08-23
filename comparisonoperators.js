// all about the comparison operators
// ==, !=, >, <, >=, <=

// equal  to
// not equal to != 
{
let a = 5;
let b = 2;

console.log("5 == 2", a == b ); // false

}

{
    let a = 5;
    let b = 5;
    console.log("5 == 5", a == b); // true

}

// now we will talk about triple equal to === 
// not only it will check value but it will also check the data type
// this are the stricter version if we want to understand it in a easier way

{
    let a = 5;
    let b = "5";
    console.log("5 === 5", a === b); // true

}

{
    let a = 5;
    let b = "5";
    console.log("5 !== 5", a !== b); // true

}