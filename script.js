let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = function () {
	return Math.floor( Math.random() * 10 );
}

const compareGuesses = function ( humanGuess, computerGuess, targetNumber ) {

	// Get human approach
	const humanApproach = Math.abs(humanGuess - targetNumber);

	// Get computer approach
	const computerApproach = Math.abs(computerGuess - targetNumber);

	// Return if human wins
	return humanApproach <= computerApproach;

}

const updateScore = function ( winner ) {

	switch(winner) {
		case 'human':
			humanScore++;
			break;
		case 'computer':
			computerScore++;
			break;
	}

}

const advanceRound = function () {
	currentRoundNumber++;
}