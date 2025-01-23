console.log("Hello World!")

//** Rock, Paper Scissors Game **

//Pseudocode
/*
    1. Create variable for scores

    2. Create a randomizer for the computer.
        - create function - math.random (1-3)
        - create switch - if 1, rock, if 2, paper, else scissor
        - store it in a variable
    
    3. Create an input for the human player.
        - prompt the user, should be case INSENSITIVE
        - add validation for the input, should be rock, paper, or scissor only
        - to make it case sensitive, always convert the input to lower case
        - store it in a variable

    4. Create the "play round"
        - create function with 2 parameters, 1 for computer input, another 1 for human input
        - compare the 2 parameters
        - create guard clause, if human input is equal with the computer input, return "It's a tie!"
        - IF human is rock and computer is paper 
            OR human is paper and computer is scissor 
            OR human is scissor and computer is rock, return "Computer wins!" then add score to computer

        - ELSE return "Human wins!" then add score to human
        
    5. Create the "play game" where it will only allow 5 rounds. 
        - variable for number of rounds, start from 0
        - WHILE round counter is not equal to 5, loop play round
        - After the loop, compare scores then display the winner
*/
       
//variables
let computerScore = 0;
let humanScore = 0;
let computerInput = "";
let humanInput = "";

// Computer input
let computerNumber = Math.floor(Math.random() * 3) + 1;
switch (computerNumber) {
    case 1:

}