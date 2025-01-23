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
let roundCtr = 0;


// Computer input
const getComputerInput = () => {
    const computerNumber = Math.floor(Math.random() * 3) + 1;

    switch (computerNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissor";
        default:
            return "Invalid input.";
    }
};

// Human input
const getValidHumanInput = () => {
    let humanInput = "";

    while (true) {
        humanInput = prompt("Rock, Paper or Scissor?").toLowerCase();

        if (humanInput === "rock" || humanInput === "paper" || humanInput === "scissor") {
            break;
        }

        alert("Invalid input, try again please.")
    }

    return humanInput;
}

const getRoundResult = (humanInput, computerInput) => {
    if (humanInput === computerInput) {
        return "Its a tie!";
    }

    if (humanInput === "rock" && computerInput === "paper" || humanInput === "paper" && computerInput === "scissor" || humanInput === "scissor" && computerInput === "rock") {
        computerScore++;
        return "gitgud!";
    } else {
        humanScore++;
        return "You win!";
    }
}

while (roundCtr < 5) {
    let humanInput = getValidHumanInput();
    let computerInput = getComputerInput(); 
    let result = getRoundResult(humanInput, computerInput);

    console.clear();

    console.log(`You chose ${humanInput}.`);
    console.log(`The computer chose ${computerInput}.`);
    
    console.log(`Round ${roundCtr + 1} result: ${result}`);
    console.log("Score (You - Computer)")
    console.log(`${humanScore} - ${computerScore}`)
    roundCtr++;
}

if (computerScore > humanScore) {
    console.log("Sorry, gitgud!");
} else if (computerScore < humanScore) {
    console.log("Congrats, you won!");
} else {
    console.log("Well, you're lucky today!");
}

