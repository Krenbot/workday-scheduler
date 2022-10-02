var currentEl = document.getElementById("currentDay");
var currentTime = moment().format("dddd, MMM Do")
var saveBtnEl = document.querySelectorAll('.saveBtn')

//Displays current time in header
currentEl.innerText = currentTime;

function timeColors() {
    var current = moment().hours();
    // console.log(current);

    $('.time-block').each(function () {
        var hourBlock = parseInt($(this).attr('id'));
        // console.log(hourBlock);

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

// //Save input in local storage
$(".saveBtn").click(function () {
    var text = $(this).siblings('textarea').val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
    console.log(time, text)
});


$('hour9 textarea').val(localStorage.getItem(time, text));

// https://www.geeksforgeeks.org/how-to-change-a-button-text-on-click-using-localstorage-in-javascript/

//Retrives items from local storage on reload
//Grab textarea component and make the val = val in local storage
// for (let i = 0; i < XXX.length; i++){
//     $('#' + i).val(localStorage.getItem(i))
// }
