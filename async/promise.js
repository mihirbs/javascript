{
const { error } = require('console');

const fs = require('fs').promises;
fs.readFile('file.txt', 'utf8').then((data) => {console.log("File content:",data);
 //when the file is read succesfully   
})
.catch((err) => {
    console.error("Error in reading the file:",err);//if there is an error occur
})

console.log("This runs immediately before the file starts reading,");
}

// {
//     doTask()
//     .then(result => 
//         doTask2 (result1))
//         .then(result => 
//             doTask3(result2))
//             .then(result =>
//                 console.log(result3))
//                 .catch(err =>
//                     console.error(err));
                
// }

{
    doTask()
  .then(result1 => 
      doTask2(result1))  // Pass result1 to doTask2
  .then(result2 => 
      doTask3(result2))  // Pass result2 to doTask3
  .then(result3 => 
      console.log(result3))  // Output result3
  .catch(err => 
      console.error(err));  // Handle errors

}

// using finally
{

const { error } = require('console');

const fs = require('fs').promises;
fs.readFile('file.txt', 'utf8')
  .then((data) => {
    console.log("File content:", data); // When the file is read successfully
  })
  .catch((err) => {
    console.error("Error in reading the file:", err); // If there is an error
  })
  .finally(() => {
    console.log("File read operation completed."); // This runs regardless of success or error
  });

console.log("This runs immediately before the file starts reading.");
}