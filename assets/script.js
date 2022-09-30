var currentEl = document.getElementById("currentDay");
var currentTime = moment().format("dddd, MMM Do")

//Displays current time in header
currentEl.innerText = currentTime
console.log(currentTime)

//Changes hours to relative colors
function timeColors() {
    var currentTime = moment().format(H);
    var textArea = $('textarea');
    console.log(currentTime);
    // if current time > text area = past
    if (textArea < currentTime) {
        $(this).addClass('past')
        // if current time = text area = present
    } else if (textArea === currentTime) {
        $(this).addClass('present')
        // if current time < text area = future
    } else (textArea > currentTime) ;{
        $(this).addClass('future')
    }
}

timeColors()

//btn click listener
function btnClick() {
}

//save btn save to local storage
