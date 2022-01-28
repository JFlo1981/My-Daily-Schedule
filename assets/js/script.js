var date = new Date();
var now = date.toDateString();
var time = date.toLocaleTimeString();
document.getElementById("currentDay").innerHTML = now + ' - ' + time;