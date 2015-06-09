var userChoice;
var compChoice;
var randomNum;

function playerRock() {
	userChoice=1;
	showImgRock();
	randomNumber();
	
}

function playerPaper() {
	userChoice=2;
	showImgPaper();
	randomNumber();
}

function playerScissors() {
	userChoice=3;
	showImgScissors();
	randomNumber();
}

function randomNumber(){
	randomNum = Math.floor(Math.random()*100)
	computerChoice();
}

function computerChoice(){
	if (randomNum<=33) {
		compChoice=1;
		CshowImgRock()
	}else if (randomNum<=66){
		compChoice=2;
		CshowImgPaper()
	}else if (randomNum<=100){
		compChoice=3;
		CshowImgScissors()
	};
	compare();
}

function compare(){

	if (userChoice === compChoice){
		 document.getElementById("Announce").innerHTML = "TIE";

	}else if (userChoice===1 && compChoice===2){
		 document.getElementById("Announce").innerHTML = "You Suck";

	}else if (userChoice===1 && compChoice===3){
		 document.getElementById("Announce").innerHTML = "YOU WIN";

	}else if (userChoice===2 && compChoice===1){
		 document.getElementById("Announce").innerHTML = "YOU WIN";

	}else if (userChoice===2 && compChoice===3){
		 document.getElementById("Announce").innerHTML = "YOU SUCK";
		
	}else if (userChoice===3 && compChoice===1){
		 document.getElementById("Announce").innerHTML = "YOU SUCK!";
		
	}else if (userChoice===3 && compChoice===2){
	    document.getElementById("Announce").innerHTML = "YOU WIN";
		
	}

}

function showImgRock(){
	document.getElementById("playerPick").innerHTML="<img class='playerRock img-responsive' src='http://imageserver.moviepilot.com/-09debbae-6bc9-4460-a7a1-a38be2848083.jpeg'>"
}

function showImgPaper() {
           document.getElementById("playerPick").innerHTML = "<img class='playerPaper img-responsive' src='http://www.toiletpapertissue.com/support/Paper_Images/PGC23993.jpg'>" 
        }

function showImgScissors() {
            document.getElementById("playerPick").innerHTML = "<img class='playerScissors img-responsive' src='http://image.yaymicro.com/rz_512x512/3/565/scissors-clip-art-cartoon-illustration-3565082.jpg'>"
        }

function CshowImgRock() {
           document.getElementById("compPick").innerHTML = "<img class='playerRock img-responsive' src='http://fc07.deviantart.net/fs71/f/2012/204/5/e/thor_s_hammer_by_xstarscapex-d58aoth.png'>"
        }	

function CshowImgPaper() {
           document.getElementById("compPick").innerHTML = "<img class='playerPaper img-responsive' src='http://efunnyimages.com/wp-content/uploads/funny-paper-sheet-art-jail.jpg'>" 
        }

function CshowImgScissors() {
            document.getElementById("compPick").innerHTML = "<img class='playerScissors img-responsive' src='https://s-media-cache-ak0.pinimg.com/236x/c2/cc/1f/c2cc1f20dcf2054d0a1ed69fe96631c1.jpg'>"
        }

 var form= document.forms.Example

form.addEventListener("submit",waddup,false);

function waddup(event){

	event.preventDefault();
	var tape = {

		rating: form.waddup.value,


	}
var text="<p> Hi,You better give me a good grade for this project. "+tape.rating+".</p>";
	document.getElementById("results").innerHTML= text;
}

