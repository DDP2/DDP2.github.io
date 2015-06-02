var form = document.forms.practiceForm;

form.addEventListener("submit", displayPerson, false);

function displayPerson (event) {

	event.preventDefault ();

	var Person = {
		name: form.username.value,
		amazing: form.amazing.value,
	}

	var html = "<p>You typed:" + Person.name + " and then you typed " + Person.amazing + ".</p>";

	document.getElementById("displayText").innerHTML = html;
}
