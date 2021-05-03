const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput = 'rock') {
        return userInput;
    } else if (userInput = 'paper') {
        return userInput;
    } else if (userInput = 'scissors') {
        return userInput;
    } else {
        console.log('Error');
    }

}

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Tie!';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'User won!';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return ' The computer won!';
        } else {
            return 'User won!';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'User won!';
        }
    }
}

function playGame() {
    userChoice = getUserChoice('rock');
    computerChoice = getComputerChoice();

    // return`The user's choice is ${userChoice}, the computer's choice is ${computerChoice}.`;

    return determineWinner(userChoice, computerChoice);
}

console.log(playGame());