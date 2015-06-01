function button(){

	var text = "";
	var list = "";



	for ( i = 0; i < 3; i++) {//This is a for loop that check the code to see if it is true, so it can keep going

		list.push(prompt("list the sports the you like"));
		text += list[i] + "<br>";
		document.getElementById('ayeee').innerHTML = text; //this display the promp onto HTML




}	
}

function buttonTwo(){

	var text2 = "";
	var list2 = "";



	while ( i= 0; i < 3; i++){// This is a while loop thar check the code to see if it is true, so it can keep running

		list.push(prompt("list the sports you dislike"));
		text2 += list2[i] + "<br>";
		document.getElementById('bruh').innerHTML = text;




}
}