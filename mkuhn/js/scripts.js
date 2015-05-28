var userChoice;
var compChoice;
var randomNum;


function playerRock(){
	userChoice = 1; 
	randomNumber();

}

function playerPaper(){
	
	userChoice = 2; 
	randomNumber();
}
function playerScissors(){
	userChoice= 3;
	randomNumber();
}

function randomNumber(){
	randomNum= Math.floor(Math.random()*100);
	computerChoice();
}

function computerChoice(){
	if(randomNum<= 33) {
		compchoice= 1;
	} else if(randomNum <= 66){
		compChoice= 2;
	}else if(randomNum <= 100){
		compChoice =3;
	}
	compare();
}

function compare() {
	if (userChoice === compChoice) {
		document.getElementById('theResult').innerHTML ="It's a tie!";

	} else if (userChoice === 1 && compChoice === 2){
		document.getElementById('theResult').innerHTML="Paper beats rock! You Lose!";
	} else if (userChoice === 1 && compChoice === 3){
		document.getElementById('theResult').innerHTML="Rock beats scissors! You Win!";
	}else if (userChoice === 2 && compChoice === 1){
		document.getElementById('theResult').innerHTML="Paper beats rock! You Win!";
	}else if (userChoice === 2 && compChoice === 3){
		document.getElementById('theResult').innerHTML="Scissors beats paper! You Lose!";
	}else if (userChoice === 3 && compChoice === 1){
		document.getElementById('theResult').innerHTML="Rock beats scissors! You Lose!";
	}else if (userChoice === 3 && compChoice === 2){
		document.getElementById('theResult').innerHTML="Scissors beats paper! You win!";

	}

}

	//the above lines 42 through 53 are used for what the user chooses Rock, Paper or Scissors.

