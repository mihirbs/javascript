// mdn docs 
// its is like a dictionary which we can use in our  code to get the information about the function or variable or any other thing in the code. 

// now we are going to learn about switch case it is not used in our day to day use

// but it is used in the programming language to make the code more readable and more efficient.

// let day = 3;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = 'Monday';
//     break;
//   case 2:
//     dayName = 'Tuesday';
//     break;
//   case 3:
//     dayName = 'Wednesday';
//     break;
//   case 4:
//     dayName = 'Thursday';
//     break;
//   case 5:
//     dayName = 'Friday';
//     break;
//   case 6:
//     dayName = 'Saturday';
//     break;
//   case 7:
//     dayName = 'Sunday';
//     break;
//   default:
//     dayName = 'Invalid day';
// }

// console.log(dayName);  // Output: Wednesday


// ultiple Cases: You can stack cases together if you want them to execute the same code.

// let fruit = 'apple';

// switch (fruit) {
//   case 'apple':
//   case 'pear':
//     console.log('This is a juicy fruit!');
//     break;
//   default:
//     console.log('Unknown fruit');
// }

// Without break: If you omit break, the code will "fall through" to the next case, even if it doesn’t match.

// let number = 1;

// switch (number) {
//   case 1:
//     console.log('One');
//   case 2:
//     console.log('Two');
//   case 3:
//     console.log('Three');
//     break;
//   default:
//     console.log('Other number');
// }

// Output:
// One
// Two
// Three
