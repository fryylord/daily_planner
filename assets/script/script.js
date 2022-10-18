var timeDisplayEl = $('#time_display');
    
function displayTime() {
  var rightNow = moment().format('hh:mm:ss a [on] MMM DD, YYYY ');
  timeDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000);

function isActive() {
  var currentHour = moment().hour();
  $(".scheduleItem").each(function () {
    var scheduleHour = $(this).attr("id");
    if (scheduleHour < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
      }
    else if (scheduleHour == currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
      }
    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
      }
    })
  } 
  isActive();

$(".saveBtn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".saveMe").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, value);
});
  
$("#09 .saveMe").val(localStorage.getItem("09"));
$("#10 .saveMe").val(localStorage.getItem("10"));
$("#11 .saveMe").val(localStorage.getItem("11"));
$("#12 .saveMe").val(localStorage.getItem("12"));
$("#13 .saveMe").val(localStorage.getItem("13"));
$("#14 .saveMe").val(localStorage.getItem("14"));
$("#15 .saveMe").val(localStorage.getItem("15"));
$("#16 .saveMe").val(localStorage.getItem("16"));
$("#17 .saveMe").val(localStorage.getItem("17"));