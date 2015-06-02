var userChoice;
var compChoice;
var randomNum;


function playerRock() {

	userChoice = 1;

	showImgRock();

	randomNumber();
}


function playerPaper() {

	userChoice = 2;

	showImgPaper();

	randomNumber();
}

function playerScissors() {

	userChoice = 3;

	showImgScissors();

	randomNumber();
}


function randomNumber() {
	randomNum = Math.floor(Math.random()*100);
	computerChoice();
}

function computerChoice() {

	if (randomNum <= 33) {
		compChoice = 1;
		CshowImgRock();

	} else if (randomNum <= 66) {

		compChoice = 2;
		CshowImgPaper();
	} else if (randomNum <= 100) {

		compChoice = 3;
		CshowImgScissors();
	};

	compare();
}


function compare() {

	if (userChoice === compChoice) {
		document.getElementById("Announce").innerHTML = "Tie!";

	} else if (userChoice === 1 && compChoice === 2) {
		document.getElementById("Announce").innerHTML = "Computer chooses paper and wins";

	} else if (userChoice === 1 && compChoice === 3) {
		document.getElementById("Announce").innerHTML = "Rock beats Paper! You win!";

	} else if (userChoice === 2 && compChoice === 1) {
		document.getElementById("Announce").innerHTML = "You win this round!";
	

	} else if (userChoice === 2 && compChoice === 3) {
		document.getElementById("Announce").innerHTML = "You lose this round!";

	} else if (userChoice === 3 && compChoice === 1 ) {
		document.getElementById("Announce").innerHTML = "Hi Loser";
	} else if (userChoice === 3 && compChoice === 2 ) {
		document.getElementById("Announce").innerHTML = "Wow you're good!";
	}

}



function showImgRock(){
	document.getElementById("userChoice").innerHTML="<img class='playerRock' src='http://outdoordesignbylucas.files.wordpress.com/2011/01/1-10-11-charcter-rocks.jpg'>"
}

function showImgPaper() {
           document.getElementById("userChoice").innerHTML = "<img class='playerPaper' src='http://www.amusingtime.com/images/06/funny-toilet-paper-image.jpg'>" 
        }

function showImgScissors() {
            document.getElementById("userChoice").innerHTML = "<img class='playerScissors' src='http://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Scissors_icon_black.svg/1280px-Scissors_icon_black.svg.png'>"
        }

function CshowImgRock() {
           document.getElementById("compChoice").innerHTML = "<img class='playerRock' src='http://outdoordesignbylucas.files.wordpress.com/2011/01/1-10-11-charcter-rocks.jpg'>"
        }	

function CshowImgPaper() {
           document.getElementById("compChoice").innerHTML = "<img class='playerPaper' src='http://www.amusingtime.com/images/06/funny-toilet-paper-image.jpg'>" 
        }

function CshowImgScissors() {
            document.getElementById("compChoice").innerHTML = "<img class='playerScissors' src='http://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Scissors_icon_black.svg/1280px-Scissors_icon_black.svg.png'>"
        }


var form = document.forms.Example;

form.addEventListener("submit",waddup,false);
console.log("working");


function waddup(event){

	event.preventDefault();


	var tape = {

		rating: form.waddup.value,


	}
var text="<p> Best. Moment. Ever. When "+tape.rating+".</p>";
	document.getElementById("results").innerHTML= text;
}