var form = document.forms.example;  

form.addEventListener("submit", nameDisplay, false);
console.log("check");
function nameDisplay(event) {
	event.preventDefault();

	console.log("check");
	var person = {
		name: form.username.value,
		email: form.username2.value,
		dateOfBirth: form.username3.value,
		cityName: form.username4.value,
	}
	

	var text = "Your username name is " + person.name + ", and your email address is " + person.email + ". You were born in " + person.dateOfBirth + ", and you currently live in " + person.cityName; + "."
	console.log(text);
	document.getElementById("result").innerHTML = text;
}