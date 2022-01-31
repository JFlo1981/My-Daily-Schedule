//  new var to use saveBtn in function below
let saveBtn = $(".saveBtn");

const date = moment().format("[It is ]dddd, MMMM Do, YYYY <br> <br> [The time is ]h:mm A")
$("#currentDay").append(date); 


function pastPresentFuture() {
//  var for current time
    const currentTime = moment().format("HH");
    // console.log(currentTime); -- shows in military time format

// select user input -- id of element using prop()  

    $(".row").map(function() {
      const  plannerTime = $(this).prop("id");

    //   console.log(this);  --- (this) refers to the class .row id #08-#17 of each timeblock

// compare times with if stament and assign proper css (.addClass)
      if (currentTime > plannerTime) {
        $(this).addClass("past"); 
      } else if (currentTime == plannerTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    //   console.log(this); --- now (this) has the added class past, present or future to the timeblocks based on the outcome of the if else above
    })
};

// save user text entry to local storage when saveBtn is clicked
// creat event listener to put this key:value pair into local storage
saveBtn.on("click", function(){

    const hour = $(this).siblings(".hour").text(); 
    const input = $(this).siblings(".input").val(); 

    localStorage.setItem(hour, input);
    
});
// console.log(this); --- now (this) refers to the first and second column respectively within the timeblocks
// when refreshed grab local storage data (getItem) and display it in the appropriate time block

function inputPersist() {

    $(".hour").map(function() {

        const savedHour = $(this).text();
        const savedInput = localStorage.getItem(savedHour);

        if(savedInput !== null) {
            $(this).siblings(".input").val(savedInput);
        }
        // console.log(this);  --- now (this) refers to the first column showing the time (hour)
    });
}
// add call functions to run program
pastPresentFuture();
inputPersist();
