// calculate sum of 1 to 5 
// {
// let sum = 0;
// let n = 6;
// for (let i = 1; i <=n; i++) {
//     sum = sum + i;
// }

// console.log("sum =",sum)
// console.log("loop has ended")
// }
// this is the simplest example of for loop
// {
//     for (let i=1; i<=5; i++) {
//         console.log("i =",i);
//     }
// }

// for in loop
{

for (let variable in object) {
    // code block to be executed
}


let person = {name: "John", age: 30, city: "New York"};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

}

// for of loop

let str="vrajchampak";

for (let i of str) {
    console.log(i);
}
// this loop is used for strings and arrays


