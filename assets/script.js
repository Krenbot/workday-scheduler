var currentEl = document.getElementById("currentDay");
var currentTime = moment().format("dddd, MMM Do")

// var textBlock = $(".col-8")
//Displays current time in header
currentEl.innerText = currentTime;

function timeColors() {
    var current = moment().hours();
    console.log(current);

    $('.time-block').each(function() {
        var hourBlock = parseInt($(this).attr('id'));
        console.log(hourBlock)
    })
}

timeColors()


// Changes hours to relative colors
// 

//     
//     console.log(current)
    
//     $(".time-block").each(function) {
//         var hour = parseInt($(this).attr("id"));
//     }
    
//     if (hour < current) {
       
//         $(this).addClass('past')

//     } else if (hour === current) {
//         $(this).addClass('present')
        
//     } else {
//         $(this).addClass('future')
//     }
// }
// timeColors();

//btn click listener
// function btnClick() {
// }

//save btn save to local storage