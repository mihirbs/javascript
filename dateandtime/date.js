{
// date 
// type of date is an object
let myDate = new Date()
//console.log(myDate) // 2023-03-15T14:30:00.
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// this a method to declare dates
// let myCreatedDate = new Date(2023,0, 23)
// console.log(myCreatedDate.toDateString());
 }

{
    // // creating a date object 
    // let currentDate = new Date(); // returns current date and time 

    // // specifing date and time

    // // here is the format = new Date(year, month, day, hours, minutes, seconds, milliseconds)

    // let specificDate = new Date(2023, 11, 25, 12, 0, 0); 

//     // 1. Creating a Date Object
// let currentDate = new Date(); // Current date and time
// console.log("Current Date and Time:", currentDate);

// // 2. Creating a Specific Date
// let specificDate = new Date(2023, 11, 25, 12, 0, 0); // December 25, 2023, 12:00:00
// console.log("Specific Date:", specificDate);

// // 3. Extracting Information from the Date
// let year = currentDate.getFullYear();
// let month = currentDate.getMonth(); // 0 = January, 11 = December
// let day = currentDate.getDate();
// let dayOfWeek = currentDate.getDay(); // 0 = Sunday, 6 = Saturday
// let hours = currentDate.getHours();
// let minutes = currentDate.getMinutes();
// let seconds = currentDate.getSeconds();

// console.log(`Year: ${year}, Month: ${month + 1}, Day: ${day}, Day of Week: ${dayOfWeek}`);
// console.log(`Time: ${hours}:${minutes}:${seconds}`);

// // 4. Setting Date and Time
// currentDate.setFullYear(2025);
// currentDate.setMonth(0); // January
// currentDate.setDate(15); // 15th day of the month
// currentDate.setHours(10, 30, 0); // 10:30:00 AM
// console.log("Modified Date:", currentDate);

// // 5. Formatting Date and Time
// let formattedDate = currentDate.toLocaleDateString(); // e.g., "9/5/2024"
// let formattedTime = currentDate.toLocaleTimeString(); // e.g., "10:30:00 AM"
// console.log("Formatted Date:", formattedDate);
// console.log("Formatted Time:", formattedTime);

// // With options for a specific format
// let formattedDateWithOptions = currentDate.toLocaleDateString('en-GB', {
//   weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
// });
// console.log("Formatted Date with Options:", formattedDateWithOptions);

// // 6. Date Arithmetic: Adding/Subtracting Time
// let futureDate = new Date();
// futureDate.setDate(currentDate.getDate() + 5); // Adds 5 days
// console.log("Future Date (after 5 days):", futureDate);

// let pastDate = new Date();
// pastDate.setHours(currentDate.getHours() - 3); // Subtracts 3 hours
// console.log("Past Date (3 hours earlier):", pastDate);

// // 7. Calculating Difference Between Dates
// let startDate = new Date('2024-09-01');
// let endDate = new Date('2024-09-05');
// let differenceInMilliseconds = endDate - startDate; // Difference in milliseconds
// let differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24); // Convert to days
// console.log(`Difference between ${startDate} and ${endDate}: ${differenceInDays} days`);

// 8. Working with Timestamps
let timestamp = Date.now(); // Current timestamp in milliseconds since January 1, 1970
console.log("Current Timestamp:", timestamp);

// Convert timestamp back to date
let dateFromTimestamp = new Date(timestamp);
console.log("Date from Timestamp:", dateFromTimestamp);

// Adding time using timestamps
let threeDaysLater = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // Add 3 days
console.log("Date 3 days later (using timestamp):", threeDaysLater);

}