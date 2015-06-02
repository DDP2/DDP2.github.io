var form = document.forms.example;

// This points to  the form called "example" in HTML

form.addEventListener("submit", nameDisplay, false);

function nameDisplay(event) {
	event.preventDefault();

	var person = {
		name: form.username.value,
		}

		var text= "<p>Hello, " + person.name + ".</p>";

		document.getElementById("result").innerHTML = text;                                 

}
