var form = document.forms.nameForm;

//This points tothe from called "example" in HTML

form.addEventListener("submit",nameDisplay,false);

function nameDisplay(event) {

event.preventDefault();

	var person = {

		fname: form.firstName.value,
		lname: form.lastName.value,


	}
var text = "<p>Welcome to my website, " + person.fname + " " + person.lname + ".</p>"

document.getElementById("result").innerHTML = text;
}


