var form = document.forms.example;


form.addEventListener("submit",nameDisplay,false);


function nameDisplay(event) {

	event.preventDefault();

	console.log("check");


	var person = {
		name: form.username.value,
		
	}


	var l = [];

	//Iterate through all the limbs

	for(i = 0; i < form.food.length; i++) {

		//If it is checked, push the value into the array. Note my syntax.

		if(form.food[i].checked) {
			l.push(form.food[i].value);
		}
		console.log("loop");

	}

	console.log(l);

	person.food = l;

	console.log(person.food);

	var text = "<p>Hello, " + person.name + ".</p>" + "<p>These are your favorite foods: " + person.food.join(", ") + ".</p>";



	document.getElementById("result").innerHTML = text;


}