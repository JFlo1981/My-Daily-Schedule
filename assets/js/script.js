const now = moment().format("dddd, MMMM Do, YYYY")
$("#currentDay").append(now);

// function to compare curent time to time-blocks for color change

function pastPresentFuture() {
//  need to add code for changing the color of the time-block based on past, presnet & future
//  var for current time
    const currentTime = moment().format("HH");
    // console.log(currentTime);

// get id of element  -- found .attr() (at 4am hahahaha)

    $(".row").map(function(){
      let  plannerTime = $(this).attr("id");

// compare with if stament and assign proper css (.addClass)
      if (currentTime > plannerTime) {
        $(this).addClass("past"); 
      } else if (currentTime == plannerTime) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }

    });

// var for time-block


};


// saved user text entry to local storage when saveBtn is clicked
// key as event, event as value
// creat event listener to put this key:value pair into local storage

//  will need a var for the time (.hour) and var for the text (.input)


// when refreshed grab local storage data and display it in the appropriate time block

// add call functions to run program
pastPresentFuture();