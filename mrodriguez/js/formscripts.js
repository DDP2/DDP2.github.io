

var form = document.forms.practiceForm;


form.addEventListener("submit", displayPerson, false);

console.log("Working");

function displayPerson(event) {
	console.log("function was clicked");

	event.preventDefault();

	var Person = {
		name: form.catname.value,
		user: form.username.value,
		pass: form.password.value,
	}

	var html = "<p>Your cat's name is: " + Person.name + "</p>" + "<p>Your username is:" + Person.user + "</p>" + "<p>Your password is:" + Person.pass + "</p>";


	document.getElementById("displayText").innerHTML = html;
}