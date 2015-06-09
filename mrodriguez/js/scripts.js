var userChoice;
var compChoice;
var randomNum;


function playerRock() {

	userChoice = 1; // rock = 1 
	document.getElementById('playerChoice').innerHTML = "<img src='http://megaicons.net/static/img/icons_sizes/8/178/512/rock-paper-scissors-rock-icon.png' class='img-responsive' alt='Responsive image'>";

	randomNumber();
}


function playerPaper(){

	userChoice = 2; // paper = 2
	document.getElementById('playerChoice').innerHTML = "<img src='http://megaicons.net/static/img/icons_sizes/8/178/512/rock-paper-scissors-paper-icon.png' class='img-responsive' alt='Responsive image'>";

	randomNumber();
}

function playerScissors(){

	userChoice = 3; // scissors = 3
	document.getElementById('playerChoice').innerHTML = "<img src='http://megaicons.net/static/img/icons_sizes/8/178/256/rock-paper-scissors-scissors-icon.png' class='img-responsive' alt='Responsive image'>";

	randomNumber();
}

function randomNumber() {
	randomNum = Math.floor(Math.random()*100)

	computerChoice();
}

function computerChoice() {

	if (randomNum <= 33) {
		compChoice = 1; //computer chooses rock
		document.getElementById('computerChoice').innerHTML = "<img src='http://megaicons.net/static/img/icons_sizes/8/178/512/rock-paper-scissors-rock-icon.png' class='img-responsive' alt='Responsive image'>";

	}
	else if (randomNum <= 66){
		compChoice =2; //computer chooses paper
		document.getElementById('computerChoice').innerHTML = "<img src='http://megaicons.net/static/img/icons_sizes/8/178/512/rock-paper-scissors-paper-icon.png' class='img-responsive' alt='Responsive image'>";

	}  	
	else if (randomNum <=100) {
		compChoice = 3; //computer chooses scissors
		document.getElementById('computerChoice').innerHTML = "<img src='http://megaicons.net/static/img/icons_sizes/8/178/256/rock-paper-scissors-scissors-icon.png' class='img-responsive' alt='Responsive image'>";

	};

	compare();
}

function compare() {

	
	if(userChoice === compChoice) {
		document.getElementById('theResult').innerHTML = "It is a tie!";

	} else if (userChoice === 1 && compChoice === 2){
		document.getElementById('theResult').innerHTML = "He covered your rock with the paper of wickeness, you lose bro.";

	} else if (userChoice === 1 && compChoice === 3){
		document.getElementById('theResult').innerHTML = "Rock crushes the scissors!! You win the round bro!";

	} else if (userChoice === 2 && compChoice === 1){
		document.getElementById('theResult').innerHTML = "You covered his little pebble with a mighty piece of paper!! Round won.";

	} else if (userChoice === 2 && compChoice === 3){
		document.getElementById('theResult').innerHTML = "Your paper got snipped to the point of confetti!! Round lost!";

	} else if (userChoice === 3 && compChoice === 1){
		document.getElementById('theResult').innerHTML = "Computer chose rock and crushes your pair of scissors!! Sad for you, round lost.";

	} else if (userChoice === 3 && compChoice === 2){
		document.getElementById('theResult').innerHTML = "Computer chooses paper and gets cut down to size you win the round!!";
	}


}






















