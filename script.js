let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


const generateTarget = function () {
	return Math.floor( Math.random() * 10 );
}

const getAbsoluteDistance = function ( guess, target ) {
	return Math.abs(guess - target);
}

const compareGuesses = function ( humanGuess, computerGuess, targetNumber ) {

	// Validate human input
	if ( humanGuess < 0 || humanGuess > 9) {
		alert( "You have to introduce a number between 0 and 9" );
	}

	// Get human approach
	const humanApproach = getAbsoluteDistance(humanGuess, targetNumber);

	// Get computer approach
	const computerApproach = getAbsoluteDistance(computerGuess, targetNumber);

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