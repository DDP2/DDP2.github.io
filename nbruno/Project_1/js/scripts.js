var GameStart = document.getElementById("GameStart");

function start () {



var userResponse = prompt("What be the password?").toUpperCase();

if (userResponse === "RGBYO") {
	document.getElementById('compResponse').innerHTML = "The door opens and you enter.";

};

}

 GameStart.addEventListener('click',start);