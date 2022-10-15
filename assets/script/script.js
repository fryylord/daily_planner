var timeDisplayEl = $('#time_display');
    
function displayTime() {
  var rightNow = moment().format('hh:mm:ss a [on] MMM DD, YYYY ');
  timeDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000);

function isActive() {
  var currentHour = moment().hour();
  $(".scheduleItem").each(function () {
    var scheduleHour = $(this).attr("id").split("_")[1];
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
  var time = $(this).parent().attr("id").split("_")[1];
  localStorage.setItem(time, value);
});
  
$("#hour_09 .saveMe").val(localStorage.getItem("09"));
$("#hour_10 .saveMe").val(localStorage.getItem("10"));
$("#hour_11 .saveMe").val(localStorage.getItem("11"));
$("#hour_12 .saveMe").val(localStorage.getItem("12"));
$("#hour_13 .saveMe").val(localStorage.getItem("13"));
$("#hour_14 .saveMe").val(localStorage.getItem("14"));
$("#hour_15 .saveMe").val(localStorage.getItem("15"));
$("#hour_16 .saveMe").val(localStorage.getItem("16"));
$("#hour_17 .saveMe").val(localStorage.getItem("17"));