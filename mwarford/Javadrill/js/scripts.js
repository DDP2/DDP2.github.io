var userChoice;
var compChoice;
var randomNum;

function playerRock() {

	userChoice = 1; 

	randomNumber();
}

function playerPaper() {
	userChoice = 2;
	randomNumber();
}

function playerScissors() {
	userChoice = 3;
	randomNumber();
}

function randomNumber() {
	randomNum = Math.floor(Math.random()*100);
	computerChoice();
}
 
 function computerChoice() {

 	if (randomNum <= 33) {
 		compChoice = 1;
 	} else if (randomNum <= 66){
 		compChoice = 2;
	} else if (randomNum <= 100){
		compChoice = 3;
	};

	compare();
 }

 function compare() {
 	if(userChoice === compChoice) {
 		alert("It is a tie!");
 	} else if (userChoice === 1 && compChoice === 2) {
 		alert("Computer chooses paper and wins!");
 	} else if (userChoice === 1 && compChoice === 3) {
 		alert("Rock beats scissors! You win!!");
 	} else if (userChoice === 2 && compChoice === 1) {
 		alert("Paper covers rock. You win!");
 	}else if (userChoice === 2 && compChoice ===3) {
 		alert("Computer chooses scissors. You lose!");
 	}else if (userChoice ===3 && compChoice ===1) {
 		alert("Rock beats scissors. You lose...");
 	}else if (userChoice ===3 && compChoice ===2) {
 		alert("Scissors cuts paper. You win!!!");
 	}
 }