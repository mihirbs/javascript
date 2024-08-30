// printing all the even numbers from 0 to 1
// {

// for(let num=0; num<=100; num++){
//     if(num % 2 === 0){
//     console.log("num =", num);}
// } 
// }
// practice q2 
// a game where you start with a random game number. ask the user to keep guessing the game number until the user enter the correct value
// {
// let gamenum = 25;
// let usernum = prompt("Guess the any number:");

// while(usernum !== gamenum){

// }
// console.log("congrats, you entered the right number")
// }

{// generating random number
    const randomnum = Math.floor(Math.random() * 100) + 1;
    let userguess = null;

    console.log("welcome to the guessing gaming!");
    console.log("Guess a number between 1 to 100");

    // asking the user to guess the number until he is right 

    while(userguess !== randomnum){
        userguess = parseInt(prompt("enter your guess"))
    
        if (userguess < randomnum){
            console.log("Too low please try again.");
        } else if (userguess > randomnum){
            console.log("Too high please try again.");
        }else if (isNaN(userguess)){
            console.log("That's not a number please enter a valid number.")
        } else {
            console.log(`congrats, you entered the right number: ${randomnum}`);
        }

    }
}
