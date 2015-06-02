var rand = Math.random();

//rock corresponds with 1, paper with 2, and scissors with 3

// inits the computer variable, so as to make it global. 
computer = 0
//the decider func decides what the computer will play.
function decider (){

	rand = Math.random();

	if(rand < .33) {
		computer = 1
		console.log(computer)
	}
	else if ((.33 < rand) && (rand < .66)) {
		computer = 2
		console.log(computer)
	}
	else if (rand > .66) {
		computer = 3
		console.log(computer)
	}
	
}

//logs values for various vars so as to help troubleshoot
console.log(computer)

console.log(rand);
//inits the player variable
player = 0
//following functions set player var value to diff values 
function rock () {
	player = 1
}

function paper () {
	player = 2
}

function scissors () {
	player = 3
}
//following vars init various bits on a global scale, for printscrn
win = 0
tie = 0
lose = 0
times = 0
//evalueateCvP is the main function, it determines all outcomes. 
function evaluateCvP () {
	if (player == 1) {
		if (computer == 1) {
			alert("tie")
			tie++
			times++
			//in this event both player and computer selected rock. 
		}
		else if (computer == 2) {
			alert("you lose")
			lose++
			times++
			//in this event player was rock and computer was paper
		}
		else if (computer == 3) {
			alert("you win")
			win++
			times++
			//in this event player was rock and computer was scissors
		}
	}
	//all the rest of these possibilities are easy to figure out, just know that rock = 1 paper = 2 scissors = 3
	else if (player == 2) {
		if (computer == 1) {
			alert("you win")
			win++
			times++
		}
		else if (computer == 2) {
			alert("tie")
			tie++
			times++
		}
		else if (computer == 3) {
			alert("you lose")
			lose++
			times++
		}
	}
	else if (player == 3) {
		if (computer == 1) {
			alert("you lose")
			lose++
			times++
		}
		else if (computer == 2) {
			alert("you win")
			win++
			times++
		}
		else if (computer == 3) {
			alert("tie")
			tie++
			times++
		}
	}
	//logs all printing vars
console.log(tie);
console.log(win);
console.log(lose);
console.log(times);
//prints all printing vars
document.getElementById('win').innerHTML = win;
document.getElementById('tie').innerHTML = tie;
document.getElementById('loss').innerHTML = lose;
document.getElementById('played').innerHTML = times;
}

// resets all counters
function reset () {
	win = 0;
	tie = 0;
	lose = 0;
	times = 0;
	document.getElementById('win').innerHTML = win;
	document.getElementById('tie').innerHTML = tie;
	document.getElementById('loss').innerHTML = lose;
	document.getElementById('played').innerHTML = times;
}

//gives you some music besides the soundcloud black metal playlist
function play() {
    var audio = document.getElementById('audio1');
    if (audio.paused) {
        audio.play();
    }else{
        audio.currentTime = 0
    }
}

