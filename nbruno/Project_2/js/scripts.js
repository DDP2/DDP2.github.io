var GameStart = document.getElementById("GameStart");

function start () {
	var text = "";
	var lines = [];

	var name = "";
	var line = [];

for ( i = 0; i < 1; i++) {
	line.push(prompt("What will the title of this list be?"));
	name += line[i] + "<br>";
	document.getElementById("listtitle").innerHTML = name;

	}
	
for ( i = 0; i < 4; i++) {
	lines.push(prompt("What will the next line on the list be?"));
	text += lines[i] + "<br>";
	document.getElementById("List").innerHTML = text;

	}


}
	
 GameStart.addEventListener('click',start);


