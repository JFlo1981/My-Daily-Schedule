// var date = new Date();
// var now = date.toDateString();
// var time = date.toLocaleTimeString();
// document.getElementById("currentDay").innerHTML = now + ' - ' + time;

var now = moment().format("dddd, MMMM Do, YYYY")
$("#currentDay").append(now);