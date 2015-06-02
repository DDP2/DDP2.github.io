var userChoice;
var compChoice;
var randomNum;


function playerEarth() {

	userChoice = 1;

	document.getElementById("player").src = "pictures/earth.PNG"; 

	randomNumber();
}


function playerWater() {

	userChoice = 2;

	document.getElementById("player").src = "pictures/water.PNG"; 

	randomNumber();
}

function playerAir() {

	userChoice = 3;

	document.getElementById("player").src = "pictures/air.PNG"; 

	randomNumber();
}

function playerFire() {

	userChoice = 4;

	document.getElementById("player").src = "pictures/fire.PNG"; 

	randomNumber();
}


function randomNumber() {
	randomNum = Math.floor(Math.random()*200);
	computerChoice();
}

function computerChoice() {

	if (randomNum <= 12) {
		
		compChoice = 1;
		document.getElementById("pc").src = "pictures/earth.PNG"; 
		console.log("Comp chooses Earth");

	} else if (randomNum <= 30) {

		compChoice = 2;
		document.getElementById("pc").src = "pictures/water.PNG"; 
		console.log("Comp chooses Water");

	} else if (randomNum <= 76) {

		compChoice = 3;
		document.getElementById("pc").src = "pictures/air.PNG"; 
		console.log("Comp chooses Air");

	} else if (randomNum <= 150) {

		compChoice = 4;
		document.getElementById("pc").src = "pictures/fire.PNG"; 
		console.log("Comp chooses Fire");	
	}	

}

win = 0
tie = 0
lose = 0

function evaluateCvP () {
	if (userChoice == 1) {
		if (compChoice == 1) {
			tie++
		}
		else if (compChoice == 2) {
			lose++
		}
		else if (compChoice == 3) {
			win++
		}
		else if (compChoice == 4) {
			lose++
		}
	}
	else if (userChoice == 2) {
		if (compChoice == 1) {
			win++
		}
		else if (compChoice == 2) {
			tie++
		}
		else if (compChoice == 3) {
			lose++
		}
		else if (compChoice == 4) {
			win++
		}
	}
	else if (userChoice == 3) {
		if (compChoice == 1) {
			lose++
		}
		else if (compChoice == 2) {
			win++
		}
		else if (compChoice == 3) {
			tie++
		}
		else if (compChoice == 4) {
			win++
		}
	}
	else if (userChoice == 4) {
		if (compChoice == 1) {
			win++
		}
		else if (compChoice == 2) {
			lose++
		}
		else if (compChoice == 3) {
			lose++
		}
		else if (compChoice == 4) {
			tie++
		}
	}		
document.getElementById('win').innerHTML = win;
document.getElementById('tie').innerHTML = tie;
document.getElementById('loss').innerHTML = lose;
}