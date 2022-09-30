var currentEl = document.getElementById("currentDay");
var currentTime = moment().format("dddd, MMM Do")

//Displays current time in header
currentEl.innerText = currentTime

// if current time < text area = future
// if current time = text area = current
// if current time > text area = past


//Save btn click listener

//save btn save to local storage