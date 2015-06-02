var userChoice;
var compChoice;
var randomNum;


console.log("is this working?");

function playerRock () {


	userChoice = 1;

	console.log("player chooses rock");
	randomNumber();
}


function playerPaper () {

	userChoice = 2;

	console.log("player chooses paper")
	randomNumber();
}


function playerScissors () {

	userChoice = 3;

	console.log("player chooses scissors")
	randomNumber();
}


 function randomNumber () {
 	randomNum = Math.floor(Math.random()*100);
 	computerChoice();
 }



 function computerChoice () {

 	if (randomNum <= 33) {
 		compChoice = 1;

 		console.log("computer chooses rock");

  	} else if (randomNum <= 66) {

  		console.log ("computer chooses paper")

  		compChoice = 2;
  	} else if (randomNum <= 100) {

  		console.log("computer chooses scissors")

  		compChoice = 3;
  	};

  	compare();


}

function compare () {
	if (userChoice === compChoice) {
		alert("It is a tie!");
		


	} else if (userChoice === 1 && compChoice === 2) {
		alert("You Lose!");


	} else if (userChoice === 1 && compChoice ===3) {
		alert("You Win!");

	} else if (userChoice === 2 && compChoice ===1) {
		alert("You Win!");

	} else if (userChoice === 2 && compChoice ===3) {
		alert("You Lose!");

	} else if (userChoice === 3 && compChoice ===1) {
		alert("You Lose!");

	} else if (userChoice === 3 && compChoice ===2) {
		alert("You Win!");
	}
}