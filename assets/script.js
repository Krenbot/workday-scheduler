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
    // console.log(text)
});

//Retrives items from local storage on reload
for (let i = 0; i < hours.length; i++){
    s$('#' + i).val(localStorage.getItem(i))
}

//Courtesy of Stack Overflow - 
// $(document).ready(function () {
//     $(".btnlocalStorage").on("click", function () {
//         localStorage.setItem("myContent", $(".TextBoxColors-17").val());
//         console.log(localStorage.getItem("myContent"));
//     })
// });

//save btn save to local storage