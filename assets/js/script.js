const now = moment().format("dddd, MMMM Do, YYYY")
$("#currentDay").append(now);

// function to compare curent time to time-blocks for color change

function pastPresentFuture() {
//  need to add code for changing the color of the time-block based on past, presnet & future
//  var for current time
    const currentTime = moment().format("HH");
    console.log(currentTime);

// get id of element  -- found .attr()

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
//   console.log(plannerTime);
// var for time-block


};


// saved user text entry to local storage when save icon is clicked
// key as event, event as value
// creat event listener to put this key:value pair into local storage

// when refreshed grab local storage data and display it in the appropriate time block

// add call functions to run program
pastPresentFuture();