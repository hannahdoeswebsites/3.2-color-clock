function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
		setWidth();
		console.log(currentTime);

		// If the seconds digit is less than ten
if (seconds < 10) {
    // Add the "0" digit to the front
    // so 9 becomes "09"
    seconds = "0" + seconds;
}

// If the minutes digit is less than ten
if (minutes < 10) {
// Add the "0" digit to the front
// so 9 becomes "09"
minutes = "0" + minutes;
}
    // This gets a "handle" to the clock div in our HTML
    var clockDiv = document.getElementById('clock');

    // Then we set the text inside the clock div
    // to the hours, minutes, and seconds of the current time
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
  }

  // This runs the displayTime function the first time
  displayTime();

	// This makes our clock 'tick' by repeatedly
	// running the displayTime function every second.
	setInterval(displayTime, 1000);

function changeBackground() {
	document.getElementById("body").style.backgroundColor = "lightblue";
}
setInterval(changeBackground, 1000);


function setWidth() {
	var line = document.getElementById("line");
var currentTime = new Date();
var seconds = currentTime.getSeconds();
var lineWidth = (seconds/60)*80;
var linePercent = lineWidth + "%";

line.style.width = linePercent;
}
