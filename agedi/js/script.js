
var form = document.forms.firstQuestion;

form.addEventListener("submit",displayResponse, false); 

function displayResponse(event) {

	event.preventDefault();


	var Response = {
		name: form.answer.value,
	};



	var html = "<p>I believe that you can " + Response.name + ".</p>";



	document.getElementById("responseText").innerHTML = html;
}
