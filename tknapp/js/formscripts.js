var form = document.forms.practiceForm;


form.addEventListener("submit", displayPerson, false);


function displayPerson(event) {

	event.preventDefault();

	var Person = {
		name: form.dogname.value,
		user: form.username.value,
		pass: form.password.value,
	}

	var html = "<p>Your dog's name is: " + Person.name + "</p>" + "<p>Your email is:" + Person.user + "</p>" + "<p>Your password is:" + Person.pass + "</p>";


	document.getElementById("displayText").innerHTML = html;
}