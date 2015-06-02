var userChoice;
var compChoice;
var randomNum;


function playerRock() {

	userChoice = 1; // rock means one in this case
	document.getElementById('playerChoice').innerHTML = "<img class='img-responsive' src = '../img/rock.png' alt='Responsive image'>"
	randomNumber();
}

function playerPaper() {

	userChoice = 2; //paper mean 2 in this case
	document.getElementById('playerChoice').innerHTML = "<img class='img-responsive' src = '../img/paper.png' alt='Responsive image'>"

	randomNumber();

}
function playerScissors() {

	userChoice = 3; //scissors is 3
	document.getElementById('playerChoice').innerHTML = "<img class='img-responsive' src = '../img/scissors.png' alt='Responsive image'>"

	randomNumber ();

}

function randomNumber() {
	randomNum = Math.floor(Math.random()*100);

	computerChoice();
 }

function computerChoice() {

	if (randomNum <=33) {
		compChoice = 1; //Computer chooses rock
		document.getElementById('computerChoice').innerHTML = "<img class='img-responsive' src = '../img/rock.png' alt='Responsive image'>"

	} else if (randomNum <= 66) {

		compChoice = 2; //Computer chooses paper
		document.getElementById('computerChoice').innerHTML = "<img class='img-responsive' src = '../img/paper.png' alt='Responsive image'>"
	
	} else if (randomNum <= 100) {
		compChoice = 3; //Computer chooses Scissors
		document.getElementById('computerChoice').innerHTML = "<img class='img-responsive' src = '../img/scissors.png' alt='Responsive image'>" 
	};

	compare();

}

function compare(){
	if (userChoice === compChoice) {
		document.getElementById('theResult').innerHTML = "It is a tie!";

	} else if (userChoice === 1 && compChoice === 2) {
		document.getElementById('theResult').innerHTML = "Computer chooses paper and wins!";

	} else if (userChoice === 1 && compChoice === 3) {
		document.getElementById('theResult').innerHTML = "Rock beats scissors!!! You win!";

	} else if (userChoice === 2 && compChoice === 1) {
		document.getElementById('theResult').innerHTML = "You win!";

	} else if (userChoice === 2 && compChoice === 3) {
		document.getElementById('theResult').innerHTML = "You lose!";

	}else if (userChoice === 3 && compChoice === 1) {
		document.getElementById('theResult').innerHTML = "You Lose!";

	}else if (userChoice === 3 && compChoice === 2) {
		document.getElementById('theResult').innerHTML = "You win!";
	}


}





























