var currentEl = document.getElementById("currentDay");
var currentTime = moment().format("dddd, MMM Do")

// var textBlock = $(".col-8")

//Displays current time in header
currentEl.innerText = currentTime;

function timeColors() {
    var current = moment().hours();

    console.log(current);

    $('.time-block').each(function () {
        var hourBlock = parseInt($(this).attr('id'));
        console.log(hourBlock);

        //Compares time hour to current and sets class
        if (hourBlock === current) {
            $(this).addClass("present")
        } else if (hourBlock < current) {
            $(this).removeClass('past')
        } else {
            $(this).addClass('future')
        }
    });
}
timeColors()

//btn click listener
// function btnClick() {
// }

//save btn save to local storage