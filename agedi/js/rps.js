var randomNumber = 0;
var playerChoice;
var computerChoice;
var score = 0;

function playerRock(){  // Rock
		document.getElementById("player").innerHTML = "<h3>Rock</h3><img src='img/rock.jpg'>"
		playerChoice = 1;
	randomize();
}

function playerPaper(){ // Paper
		document.getElementById("player").innerHTML = "<h3>Paper</h3><img src='img/paper.jpg'>"
		playerChoice = 2;
	randomize();
}

function playerScissors(){ // Scissors
		document.getElementById("player").innerHTML = "<h3>Scissors</h3><img src='img/scissors.jpg'>"
		playerChoice = 3;
	randomize();
}

function randomize(){ //The computer's choice of Rock, Paper or Scissors based off of what number it generates randomly
	randomNumber = Math.floor(Math.random() * 100);
	console.log(randomNumber);
	computer();
}

function computer(){ //Computer Chooses Rock
 	if(randomNumber <= 33){
		console.log('Rock.');
		document.getElementById("computer").innerHTML = "<h3>Rock</h3><img src='img/rock.jpg'>"
		computerChoice = 1;
	} 
	else if (randomNumber <= 66){ // Computer Chooses Paper
			console.log('Paper.');
			document.getElementById("computer").innerHTML = "<h3>Paper</h3><img src='img/paper.jpg'>"
			computerChoice = 2;
	} 
	else if (randomNumber <= 100){ //Computer Chooses Scissors
			console.log('Scissors.');
			document.getElementById("computer").innerHTML = "<h3>Scissors</h3><img src='img/scissors.jpg'>"
			computerChoice = 3;
	}
	playGame();
}

function playGame(){ //Player & Computer tie
	if(playerChoice == computerChoice){
		document.getElementById("winner").innerHTML = "Tie";
		console.log("Tie");
	}

	if(playerChoice == 1 && computerChoice == 2){ //Paper beats rock, computer wins

		document.getElementById("winner").innerHTML = "Computer Wins"; 
		console.log("Computer Wins");
	}

	if(playerChoice == 1 && computerChoice == 3){ //Rock beats scissors, player wins

		document.getElementById("winner").innerHTML = "Player Wins";
		console.log("Player Wins");
		score++;
		document.getElementById("score").innerHTML = "Times Won: " + score;
	}

	if(playerChoice == 2 && computerChoice == 1){ //Paper beats rock, Player wins

		document.getElementById("winner").innerHTML = "Player Wins";
		console.log("Player Wins");

		score++;

		document.getElementById("score").innerHTML = "Times Won: " + score; //Scoreboard, keeps track of how many times player wins
	}

	if(playerChoice == 2 && computerChoice == 3){ // Scissors beats paper, Computer Wins

		document.getElementById("winner").innerHTML = "Computer Wins";
		console.log("Computer Wins");
	}

	if(playerChoice == 3 && computerChoice == 2){ // Scissors beats paper, Player wins

		document.getElementById("winner").innerHTML = "Player Wins";
		console.log("Player Wins");

		score++;

		document.getElementById("score").innerHTML = "Times Won: " + score;
	}

	if(playerChoice == 3 && computerChoice == 1){
		document.getElementById("winner").innerHTML = "Computer Wins"; //Rock beats Scissors, Computer Wins
		console.log("Computer Wins");
	}
}