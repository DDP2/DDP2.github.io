
var form = document.forms.example;

//this points to the form called "example" in HTML

form.addEventListener("submit",nameDisplay,false);

function nameDisplay(event) {

	event.preventDefault();

	var person = {
		name: form.firstname.value,
		pass: form.lastname.value,
		school: form.franklin.value,
	};

	var html = "<p>Hello,"+ ' ' + person.name + ' ' + person.pass + "!</p>"+"<p>You go to"+ ' ' +person.school+"</p>"; 

	document.getElementById("result").innerHTML = html;

}
