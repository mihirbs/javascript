// creating a set
let set = new Set();

// adding values

set.add(1);
set.add(2);
set.add(2);
set.add(3);
set.add('hello');
set.add({a: 1});
// checking a value in set 
// it will give result in boolean true or false (it is present there or not)

console.log(set.has(1)); 
console.log(set.has('mihir'));

//deleting set

set.delete(2);
console.log(set.has(2));

// getting the size of the set 

console.log(set.size);

// clearing set
set.clear();
console.log(set.size);