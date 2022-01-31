// JS runs after index page loads
$(document).ready(function () {

//  new var to use saveBtn in function below
let saveBtn = $(".saveBtn");

// appends the variable "date" to the id #currentDay on the index page

const date = moment().format("[It is ]dddd, MMMM Do, YYYY <br> <br> [The time is ]h:mm A")
$("#currentDay").append(date); 

function setupRefresh()
{
    setInterval(refreshBlock,3000);
}
setupRefresh()

function refreshBlock()
{
   $('#currentDay').html(new moment().format("[It is ]dddd, MMMM Do, YYYY <br> <br> [The time is ]h:mm A"));
}

function pastPresentFuture() {
//  var for current time
    const currentTime = moment().format("HH");
    // console.log(currentTime); -- shows in military time format

// select user input -- id of element using prop()  

    $(".row").each(function() {
      const  plannerTime = $(this).prop("id").split("hour");
        // console.log(currentTime, plannerTime);

// compare times with if stament and assign proper css (.addClass)
      if (currentTime > plannerTime) {
        $(this).addClass("past"); 
      } else if (currentTime == plannerTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    })
};

// save user text entry to local storage when saveBtn is clicked
// creat event listener to put this key:value pair into local storage
saveBtn.on("click", function(){

    const hour = $(this).parent().attr("id"); 
    const input = $(this).siblings(".input").val(); 

    localStorage.setItem(hour, input);
    
});
// when refreshed grab local storage data (getItem) and display it in the appropriate time block
$("#08 .input").val(localStorage.getItem("08"));
$("#09 .input").val(localStorage.getItem("09"));
$("#10 .input").val(localStorage.getItem("10"));
$("#11 .input").val(localStorage.getItem("11"));
$("#12 .input").val(localStorage.getItem("12"));
$("#13 .input").val(localStorage.getItem("13"));
$("#14 .input").val(localStorage.getItem("14"));
$("#15 .input").val(localStorage.getItem("15"));
$("#16 .input").val(localStorage.getItem("16"));
$("#17 .input").val(localStorage.getItem("17"));





// add call functions to run program
pastPresentFuture();
});
