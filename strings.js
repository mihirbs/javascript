// this topic is not very important ------------
// 1. concatenation  = joining two stringsto form a single string 

// Program to concatenate two strings
let firstName = "Leo";
let lastName = "Solanki";
let fullName = firstName + " " + lastName;
console.log("Full Name: " + fullName);


// Output: Full Name: Leo Solanki

// finding the length of the string

// Program to find the length of a string
let message = "Hello, World!";
console.log("Length of the string: " + message.length);

// string methods

// Program to convert a string to uppercase and lowercase
let text = "JavaScript is Fun!";
console.log("Uppercase: " + text.toUpperCase());
console.log("Lowercase: " + text.toLowerCase());


// string search

// Program to find the position of a word in a string
let quote = "The quick brown fox jumps over the lazy dog.";
let position = quote.indexOf("fox");
console.log("Position of 'fox': " + position);

// string replace 

// Program to replace a word in a string
let originalText = "I love JavaScript!";
let newText = originalText.replace("JavaScript", "coding");
console.log("Original Text: " + originalText);
console.log("New Text: " + newText);


// string split 

// Program to split a string into an array of words
let sentence = "JavaScript is a versatile language.";
let words = sentence.split(" ");
console.log("Words in the sentence: ", words);
