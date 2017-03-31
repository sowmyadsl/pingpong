//Business logic
var resultsArray = [];
//create pingpong function
function pingPong() {
	var userInput = parseInt($("#user-input").val());
	for (var i = 1; i <= userInput; i = i + 1) {
		if ((i % 3) === 0 && (i % 5) === 0) {
			resultsArray.push("Ping-Pong!");
		} else if (i % 3 === 0) {
			resultsArray.push("Ping");
		} else if (i % 5 === 0) {
			resultsArray.push("Pong");
		} else {
			resultsArray.push(i);
		};
	};
	return resultsArray;
}
//user-interface logic
$(document).ready(function() {
	$("#form-one").submit(function(event) {
		event.preventDefault();
		var locArray = pingPong();
		// displays each elements in the array as a list
		resultsArray.forEach(function(locArray) {
			$(".output").append("<li>" + locArray + "</li>");
    resultsArray = [];
		});
	});
});
