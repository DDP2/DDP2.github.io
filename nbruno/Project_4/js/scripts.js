var playerChoice = 0;
var compChoice = 0;
var randomNumber = 0;



function playerRock(){
	playerChoice = 1;
	randomize();
}

function playerPaper(){
	playerChoice = 2;
	randomize();
}

function playerScissors(){
	playerChoice = 3;
	randomize();
}



function randomize(){

randomNumber = Math.floor(Math.random()*100);
	computer();

}
function computer(){

	if(randomNumber <= 33){

		console.log('Rock');
		compChoice = 1;
	} else if(randomNumber <= 66){

		console.log('Paper');
		compChoice = 2;
	} else if(randomNumber <= 100){

		console.log('Scissors');
		compChoice = 3;
	};
	compare();
}

function compare() {
if (playerChoice === compChoice) {
	alert("Its a tie!");
} else if (playerChoice === 1 && compChoice === 2) {
	alert("Computer chooses paper, paper covers rock! You lose!");
} else if (playerChoice === 1 && compChoice === 3) {
	alert("Rock crushes Scissors!  You win!");
} else if (playerChoice === 2 && compChoice === 1) {
	alert("Computer chooses rock, paper covers rock! You win!");
} else if (playerChoice === 2 && compChoice === 3) {
	alert("Computer chooses scissors, scissors cuts paper! You lose!");
} else if (playerChoice === 3 && compChoice === 1) {
	alert("Computer chooses rock, rock crushes scissors! You lose!");
} else if (playerChoice === 3 && compChoice === 2) {
	alert("Computer chooses paper, scissors cut paper! You win!");
}
}
