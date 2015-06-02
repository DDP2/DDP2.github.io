//Defines all mu variables
var playerChoice;
var computerChoice;
var randomNum;

//Reveals the pictures that match the choices made for user
function playerRock(){
	userChoice = 1;
	document.getElementById('theLeft').innerHTML = "<img class='pics' src='http://th05.deviantart.net/images/PRE/large/stockart/stocknature/pretty_rock_front.jpg'>"; 
	randomNumber();
}

function playerPaper(){
	userChoice = 2;
	document.getElementById('theLeft').innerHTML = "<img class='pics' src='http://farm4.static.flickr.com/3221/3076059841_698474a3de_o.jpg'>";
	randomNumber();
}

function playerScissors(){
	userChoice = 3;
	document.getElementById('theLeft').innerHTML = "<img class='pics' src='http://www.crafterhoursblog.com/wp-content/uploads/2010/04/DSC_00871.jpg'>";
	randomNumber();
}

function randomNumber(){
	randomNum = Math.floor(Math.random()*100);
	computerChoice();
}

//Reveals the pictures that match the choices made for computer
function computerChoice(){
	if(randomNum <= 33) {
		compChoice = 1;
		document.getElementById('theRight').innerHTML = "<img class='pix' src='http://th05.deviantart.net/images/PRE/large/stockart/stocknature/pretty_rock_front.jpg'>"; 
	} else if (randomNum <= 66) {
		compChoice= 2;
		document.getElementById('theRight').innerHTML = "<img class='pix' src='http://farm4.static.flickr.com/3221/3076059841_698474a3de_o.jpg'>";
	} else if (randomNum <= 100) {
		compChoice = 3;
		document.getElementById('theRight').innerHTML = "<img class='pix' src='http://www.crafterhoursblog.com/wp-content/uploads/2010/04/DSC_00871.jpg'>";
	};
	compare();
}


//Tells the computer what to do depending on user choice 
function compare(){
	if (userChoice === compChoice) {
		document.getElementById('theResult').innerHTML ="It is a tie!";} 

	else if(userChoice === 1 && compChoice === 2) {
		 document.getElementById('theResult').innerHTML ="Paper beats rock! You lose!";} 
	else if (userChoice === 1 && compChoice === 3) {
		document.getElementById('theResult').innerHTML ="Rock beats scissors! You win!";}
	else if (userChoice === 2 && compChoice === 1) {
		document.getElementById('theResult').innerHTML ="Paper beats rock! You Win!";}
	else if (userChoice === 2 && compChoice === 3) {
		document.getElementById('theResult').innerHTML ="Scissors beats paper! You lose!";}
	else if (userChoice === 3 && compChoice === 1) {
		document.getElementById('theResult').innerHTML ="Rock beats scissors! You lose!";}
	else if (userChoice === 3 && compChoice === 2) {
		document.getElementById('theResult').innerHTML ="Scissors beats paper! You win!";}
	}


