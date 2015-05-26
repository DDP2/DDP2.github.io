var PlayerChoice = 0; //The variable that will appear after a player chooses a button. All variables will be set to zero once the page is refreshed.
var CompChoice = 0; //The computer's choice, it'll be chosen at random.
var RandomNumber = 0; //The generater that generates a random number for the computer.
var P_SCORE = 0; //The player's score.
var C_SCORE = 0; //The computer's score.

document.getElementById("PlayerScore").innerHTML = P_SCORE; //For the score to print out in the webpage (HTML).
document.getElementById("CompScore").innerHTML = C_SCORE;

function P_ROCK () { //Lines 11-45 are used to create a player variable, print the player choice out, and starts running the randomize function.
	PlayerChoice = 1;
	document.getElementById("PlayerText").innerHTML = "You chose ROCK!";
	Randomize();
}

function P_PAPER () {
	PlayerChoice = 2;
	document.getElementById("PlayerText").innerHTML = "You chose PAPER!";
	Randomize();
}

function P_SCISSORS () {
	PlayerChoice = 3;
	document.getElementById("PlayerText").innerHTML = "You chose SCISSORS!";
	Randomize();
}

function P_LIZARD () {
	PlayerChoice = 4;
	document.getElementById("PlayerText").innerHTML = "You chose LIZARD!";
	Randomize();
}

function P_SPOCK () {
	PlayerChoice = 5;
	document.getElementById("PlayerText").innerHTML = "You chose SPOCK!";
	Randomize();
}

function P_MARIO () {
	PlayerChoice = 6;
	document.getElementById("PlayerText").innerHTML = "You chose MARIO!";
	Randomize();
}

function REFRESH () {
		var resetConfirm = confirm("Are you sure you want to reset the scoreboard?                   (Scoreboard cannot be recovered.)");
		if (resetConfirm == true) {
			P_SCORE = 0;
			C_SCORE = 0;
			document.getElementById("PlayerScore").innerHTML = P_SCORE;
			document.getElementById("CompScore").innerHTML = C_SCORE;
			document.getElementById("ResultPicture").innerHTML = "";
			document.getElementById("ResultText").innerHTML = "Game has been reset!";
			document.getElementById("CompText").innerHTML = "";
			document.getElementById("PlayerText").innerHTML = "";
		}
	
}

function VIDEOSHOW () {
	document.getElementById("ResultPicture").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/x5Q6-wMx-K8" frameborder="0" allowfullscreen></iframe>';
			document.getElementById("ResultText").innerHTML = "ROCK PAPER SCISSORS LIZARD SPOCK";
			document.getElementById("CompText").innerHTML = "";
			document.getElementById("PlayerText").innerHTML = "";
}

function Randomize () { //This function is very important, it randomizes a number for the RandomNumber variable, so that the computer can have an equaly random choice.
	RandomNumber = Math.floor(Math.random() * 100);

	if (RandomNumber === 0) { //Does the same function as lines 11-45, but on the computer instead, and it doesn't randomize because the computer goes last, also, the numbers of the RandomNumber variable affect the computer's choice.

	}
	else if (RandomNumber <= 20) {
		CompChoice = 1;
		document.getElementById("CompText").innerHTML = "The computer chose ROCK!";
	}
	else if (RandomNumber <= 40) {
		CompChoice = 2;
		document.getElementById("CompText").innerHTML = "The computer chose PAPER!";
	}
	else if (RandomNumber <= 60) {
		CompChoice = 3;
		document.getElementById("CompText").innerHTML = "The computer chose SCISSORS!";
	}
	else if (RandomNumber <= 80) {
		CompChoice = 4;
		document.getElementById("CompText").innerHTML = "The computer chose LIZARD!";
	}
	else if (RandomNumber <= 100) {
		CompChoice = 5;
		document.getElementById("CompText").innerHTML = "The computer chose SPOCK!";
	}


	if (PlayerChoice === CompChoice) { //Lines 69-184 are just copy and paste comparisons to see who has won the round, it'll then run the function that adds the score. 
		document.getElementById("ResultPicture").innerHTML = '<img style="-webkit-user-select: none;" class="img-responsive" cursor: zoom-in;" src="http://successfully-speaking.com/wp-content/uploads/2013/11/handshake1.jpg" width="300" height="300">';
		document.getElementById("ResultText").innerHTML = "IT'S A TIE! OH MY!";
	}
	else if (PlayerChoice === 1 && CompChoice === 2) {
		document.getElementById("ResultPicture").innerHTML = '<img style="-webkit-user-select: none" class="img-responsive" src="https://lowrey.sharepoint.com/siteimages/desktop-computer.jpg" width="300" height="300">';
		document.getElementById("ResultText").innerHTML = "THE COMPUTER WINS! BETTER LUCK NEXT TIME!";
		AddCompScore ();
	}
	else if (PlayerChoice === 1 && CompChoice === 3) {
		document.getElementById("ResultPicture").innerHTML ='<img style="-webkit-user-select: none" class="img-responsive" src="http://turbocharged.us.com/wp-content/uploads/2012/08/Fat-Man.jpg" width="300" height="300">';
		document.getElementById("ResultText").innerHTML = "YOU HAVE WON THE DUEL! CONGRATS!";
		AddPlayerScore ();
	}
	else if (PlayerChoice === 1 && CompChoice === 4) {
		document.getElementById("ResultPicture").innerHTML ='<img style="-webkit-user-select: none" class="img-responsive" src="http://turbocharged.us.com/wp-content/uploads/2012/08/Fat-Man.jpg" width="300" height="300">';
		document.getElementById("ResultText").innerHTML = "YOU HAVE WON THE DUEL! CONGRATS!";
		AddPlayerScore ();
	}
	else if (PlayerChoice === 1 && CompChoice === 5) {
		document.getElementById("ResultPicture").innerHTML = '<img style="-webkit-user-select: none" class="img-responsive" src="https://lowrey.sharepoint.com/siteimages/desktop-computer.jpg" width="300" height="300">';
		document.getElementById("ResultText").innerHTML = "THE COMPUTER WINS! BETTER LUCK NEXT TIME!";
		AddCompScore ();
	}
	else if (PlayerChoice === 2 && CompChoice === 1) {
		document.getElementById("ResultPicture").innerHTML ='<img style="-webkit-user-select: none" class="img-responsive" src="http://turbocharged.us.com/wp-content/uploads/2012/08/Fat-Man.jpg" width="300" height="300">';
		document.getElementById("ResultText").innerHTML = "YOU HAVE WON THE DUEL! CONGRATS!";
		AddPlayerScore ();
	}
	else if (PlayerChoice === 2 && CompChoice === 3) {
		document.getElementById("ResultPicture").innerHTML = '<img style="-webkit-user-select: none" class="img-responsive" src="https://lowrey.sharepoint.com/siteimages/desktop-computer.jpg" width="300" height="300">';
		document.getElementById("ResultText").innerHTML = "THE COMPUTER WINS! BETTER LUCK NEXT TIME!";
		AddCompScore ();
	}
	else if (PlayerChoice === 2 && CompChoice === 4) {
		document.getElementById("ResultPicture").innerHTML = '<img style="-webkit-user-select: none" class="img-responsive" src="https://lowrey.sharepoint.com/siteimages/desktop-computer.jpg" width="300" height="300">';
		document.getElementById("ResultText").innerHTML = "THE COMPUTER WINS! BETTER LUCK NEXT TIME!";
		AddCompScore ();
	}
	else if (PlayerChoice === 2 && CompChoice === 5) {
		document.getElementById("ResultPicture").innerHTML ='<img style="-webkit-user-select: none" class="img-responsive" src="http://turbocharged.us.com/wp-content/uploads/2012/08/Fat-Man.jpg" width="300" height="300">';
		document.getElementById("ResultText").innerHTML = "YOU HAVE WON THE DUEL! CONGRATS!";
		AddPlayerScore ();
	}
	else if (PlayerChoice === 3 && CompChoice === 1) {
		document.getElementById("ResultPicture").innerHTML = '<img style="-webkit-user-select: none" class="img-responsive" src="https://lowrey.sharepoint.com/siteimages/desktop-computer.jpg" width="300" height="300">';
		document.getElementById("ResultText").innerHTML = "THE COMPUTER WINS! BETTER LUCK NEXT TIME!";
		AddCompScore ();
	}
	else if (PlayerChoice === 3 && CompChoice === 2) {
		document.getElementById("ResultPicture").innerHTML ='<img style="-webkit-user-select: none" class="img-responsive" src="http://turbocharged.us.com/wp-content/uploads/2012/08/Fat-Man.jpg" width="300" height="300">';
		document.getElementById("ResultText").innerHTML = "YOU HAVE WON THE DUEL! CONGRATS!";
		AddPlayerScore ();
	}
	else if (PlayerChoice === 3 && CompChoice === 4) {
		document.getElementById("ResultPicture").innerHTML ='<img style="-webkit-user-select: none" class="img-responsive" src="http://turbocharged.us.com/wp-content/uploads/2012/08/Fat-Man.jpg" width="300" height="300">';
		document.getElementById("ResultText").innerHTML = "YOU HAVE WON THE DUEL! CONGRATS!";
		AddPlayerScore ();
	}
	else if (PlayerChoice === 3 && CompChoice === 5) {
		document.getElementById("ResultPicture").innerHTML = '<img style="-webkit-user-select: none" class="img-responsive" src="https://lowrey.sharepoint.com/siteimages/desktop-computer.jpg" width="300" height="300">';
		document.getElementById("ResultText").innerHTML = "THE COMPUTER WINS! BETTER LUCK NEXT TIME!";
		AddCompScore ();
	}
	else if (PlayerChoice === 4 && CompChoice === 1) {
		document.getElementById("ResultPicture").innerHTML = '<img style="-webkit-user-select: none" class="img-responsive" src="https://lowrey.sharepoint.com/siteimages/desktop-computer.jpg" width="300" height="300">';
		document.getElementById("ResultText").innerHTML = "THE COMPUTER WINS! BETTER LUCK NEXT TIME!";
		AddCompScore ();
	}
	else if (PlayerChoice === 4 && CompChoice === 2) {
		document.getElementById("ResultPicture").innerHTML ='<img style="-webkit-user-select: none" class="img-responsive" src="http://turbocharged.us.com/wp-content/uploads/2012/08/Fat-Man.jpg" width="300" height="300">';
		document.getElementById("ResultText").innerHTML = "YOU HAVE WON THE DUEL! CONGRATS!";
		AddPlayerScore ();
	}
	else if (PlayerChoice === 4 && CompChoice === 3) {
		document.getElementById("ResultPicture").innerHTML = '<img style="-webkit-user-select: none" class="img-responsive" src="https://lowrey.sharepoint.com/siteimages/desktop-computer.jpg" width="300" height="300">';
		document.getElementById("ResultText").innerHTML = "THE COMPUTER WINS! BETTER LUCK NEXT TIME!";
		AddCompScore ();
	}
	else if (PlayerChoice === 4 && CompChoice === 5) {
		document.getElementById("ResultPicture").innerHTML ='<img style="-webkit-user-select: none" class="img-responsive" src="http://turbocharged.us.com/wp-content/uploads/2012/08/Fat-Man.jpg" width="300" height="300">';
		document.getElementById("ResultText").innerHTML = "YOU HAVE WON THE DUEL! CONGRATS!";
		AddPlayerScore ();
	}
	else if (PlayerChoice === 5 && CompChoice === 1) {
		document.getElementById("ResultPicture").innerHTML ='<img style="-webkit-user-select: none" class="img-responsive" src="http://turbocharged.us.com/wp-content/uploads/2012/08/Fat-Man.jpg" width="300" height="300">';
		document.getElementById("ResultText").innerHTML = "YOU HAVE WON THE DUEL! CONGRATS!";
		AddPlayerScore ();
	}
	else if (PlayerChoice === 5 && CompChoice === 2) {
		document.getElementById("ResultPicture").innerHTML = '<img style="-webkit-user-select: none" class="img-responsive" src="https://lowrey.sharepoint.com/siteimages/desktop-computer.jpg" width="300" height="300">';
		document.getElementById("ResultText").innerHTML = "THE COMPUTER WINS! BETTER LUCK NEXT TIME!";
		AddCompScore ();
	}
	else if (PlayerChoice === 5 && CompChoice === 3) {
		document.getElementById("ResultPicture").innerHTML ='<img style="-webkit-user-select: none" class="img-responsive" src="http://turbocharged.us.com/wp-content/uploads/2012/08/Fat-Man.jpg" width="300" height="300">';
		document.getElementById("ResultText").innerHTML = "YOU HAVE WON THE DUEL! CONGRATS!";
		AddPlayerScore ();
	}
	else if (PlayerChoice === 5 && CompChoice === 4) {
		document.getElementById("ResultPicture").innerHTML = '<img style="-webkit-user-select: none" class="img-responsive" src="https://lowrey.sharepoint.com/siteimages/desktop-computer.jpg" width="300" height="300">';
		document.getElementById("ResultText").innerHTML = "THE COMPUTER WINS! BETTER LUCK NEXT TIME!";
		AddCompScore ();
	}
	else if (PlayerChoice === 6) {
		document.getElementById("ResultPicture").innerHTML ='<img style="-webkit-user-select: none" class="img-responsive" src="http://turbocharged.us.com/wp-content/uploads/2012/08/Fat-Man.jpg" width="300" height="300">';
		document.getElementById("ResultText").innerHTML = "YOU HAVE WON THE DUEL! YOU CAN ALWAYS COUNT ON MARIO!";
		AddPlayerScore ();
	}
}

function AddPlayerScore () { //Adds a score in the player's scorebox, it'll update every time the player clicks on a button and wins.
	P_SCORE += 1;
	document.getElementById("PlayerScore").innerHTML = P_SCORE;
}

function AddCompScore () { //Ditto line 175, but this is the computer's scorebox.
	C_SCORE += 1;
	document.getElementById("CompScore").innerHTML = C_SCORE;
}







