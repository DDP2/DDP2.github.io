
var form = document.forms.emailform;

form.addEventListener("submit", displayPerson, false);

function displayPerson(event) {

	event.preventDefault();

	var Person = {
		name: form.username.value,
	};

	var html = "<p>Your Email: " + Person.name + ".</p>";

	document.getElementById("displayText").innerHTML = html;
	
}