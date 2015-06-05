var form = document.forms.example;

form.addEventListener("submit",nameDisplay, false);

function nameDisplay(event) {
	event.preventDefault();

	var person = {
		name: form.username.value,
	}
	var text = "<p>Hello " + person.name +", nice to meet you.</p>";
document.getElementById("result").innerHTML = text;

}