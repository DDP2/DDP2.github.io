var GameStart = document.getElementById("GameStart");

function start () {



var userResponse = prompt("What is the password?").toUpperCase();

if (userResponse === "TERRA") {
	document.getElementById('compResponse').innerHTML = "The homeland, should be there in a day or so.";

};
if (userResponse === "MARS") {
	document.getElementById('compResponse').innerHTML = "UNLAWFUL DESTINATION";
};
}

 GameStart.addEventListener('click',start);