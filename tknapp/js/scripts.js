var userChoice;
var compChoice;
var randomNum;

console.log("Start");

function playerRock() {

	userChoice = 1; // rock means 1
	document.getElementById('playerChoice').innerHTML = "<img src='img/Paper-Scissors-Rock_44577-l.jpg' class='img-responsive' alt='responsive image'>";
	console.log("Player chooses Rock");
	randomNumber();
}

function playerPaper() {

	userChoice = 2; // paper means 2
	document.getElementById('playerChoice').innerHTML = "<img src='img/Paper-Scissors-Rock_44577-l (2).jpg' class='img-responsive' alt='responsive image'>";

	randomNumber();
}

function playerScissors() {

	userChoice = 3; //scissors means 3
	document.getElementById('playerChoice').innerHTML = "<img src='img/Paper-Scissors-Rock_44577-l (1).jpg' class='img-responsive' alt='responsive image'>";

	randomNumber();
}

function randomNumber(){
	randomNum= Math.floor(Math.random()*100);
	console.log(randomNum);

	computerChoice();
}

function computerChoice() {

	if (randomNum <= 33) {
		compChoice = 1; //computer chooses rock
		console.log("rock");


		document.getElementById('computerChoice').innerHTML = "<img src='img/Paper-Scissors-Rock_44577-l.jpg' class='img-responsive' alt='responsive image'>";

	} else if (randomNum <= 66){

		compChoice = 2; // computer chooses paper
		console.log("paper");

		document.getElementById('computerChoice').innerHTML = "<img src='img/Paper-Scissors-Rock_44577-l (2).jpg' class='img-responsive' alt='responsive image'>";

	} else {

		compChoice = 3; // compiter chooses scissors
		console.log("scissors");
		document.getElementById('computerChoice').innerHTML = "<img src='img/Paper-Scissors-Rock_44577-l (1).jpg' class='img-responsive' alt='responsive image'>";

	
	}
	compare();

}

function compare() {
	console.log("comparing:::::::");
	if (userChoice === compChoice) {
		document.getElementById('theResult').innerHTML = "tie!";
		console.log("It's a tie");

	} else if (userChoice === 1 && compChoice === 2){
		document.getElementById('theResult').innerHTML = "computer chooses paper and wins";
		console.log("computer chooses paper and wins");

	} else if (userChoice === 1 && compChoice === 3){
		document.getElementById('theResult').innerHTML = "rock beats scissors!!! you win!";

	} else if (userChoice === 2 && compChoice === 1){
		document.getElementById('theResult').innerHTML = "paper beats rock. you win!";
	
	} else if (userChoice === 2 && compChoice === 3){
		document.getElementById('theResult').innerHTML = "scissors beat paper. you lose!";

	} else if (userChoice === 3 && compChoice === 1){
		document.getElementById('theResult').innerHTML = "rock beats scissors. you lose!";

	} else if (userChoice === 3 && compChoice === 2){
		document.getElementById('theResult').innerHTML = "scissors beat paper. you win!";
		
	}
}






