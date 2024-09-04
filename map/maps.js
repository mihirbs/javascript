// A Map is a collection of key-value pairs, where keys can be of any type (not just strings or symbols as in objects).

// creating a map

let map = new Map();

// adding key value pairs

map.set('name','Leo');
map.set('age',21);
map.set(true,'Boolean key');
map.set({x: 10},'object key');

// Acessing values:

console.log(map.get('name'));
console.log(map.get(true));

//checking for the keys

console.log(map.has('age'));

//Removing a key value pair

map.delete('age');
console.log(map.has('age'));

// iterarting over a map 

for (let[key, value]of map) {
    console.log(key,value);
}

// getting the size of map

console.log(map.size);

// clearing the map

map.clear();
console.log(map.size);

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  