var currentEl = document.getElementById("currentDay");
var currentTime = moment().format("dddd, MMM Do")

console.log(currentEl)

//Displays current time in header
currentEl.innerText = currentTime;

//Changes hours to relative colors
// function timeColors() {

    var current = moment().format(H);
    var textArea = $('#textarea');

//     console.log(currentTime)

    // // if current time > text area = past
    // if (textArea < current) {
    //     $(this).addClass('past')
    //     // if current time = text area = present
    // } else if (textArea === current) {
    //     $(this).addClass('present')
    //     // if current time < text area = future
    // } else (textArea > current) {
    //     $(this).addClass('future')
    // }

timeColors();

//btn click listener
// function btnClick() {
// }

//save btn save to local storage
