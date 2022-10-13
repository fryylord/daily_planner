$(document).ready(function () {
    let now = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = now;
    let currentHour = moment().format("HH");
  
    $(".time-div").each(function () {
      var timeDiv = $(this).attr("id").split("-")[1];
      
      if (currentHour == timeDiv) {
        $(this).addClass("present");
        $(this).children(".description").addClass("white-text");
      } else if (currentHour < timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("future");
      } else if (currentHour > timeDiv) {
        $(this).removeClass("future");
        $(this).addClass("past");
      }
    });
  
    $(".saveBtn").click(function (event) {
      event.preventDefault();
      var value = $(this).siblings(".time-block").val();
      var time = $(this).parent().attr("id").split("-")[1];
      localStorage.setItem(time, value);
    });
  
    //retrieves items from local storage and sets them in proper places
    $("#nineAM .time-block").val(localStorage.getItem("09"));
    $("#tenAM .time-block").val(localStorage.getItem("10"));
    $("#elevenAM .time-block").val(localStorage.getItem("11"));
    $("#twelvePM .time-block").val(localStorage.getItem("12"));
    $("#onePM .time-block").val(localStorage.getItem("1"));
    $("#twoPM .time-block").val(localStorage.getItem("2"));
    $("#threePM .time-block").val(localStorage.getItem("3"));
    $("#fourPM .time-block").val(localStorage.getItem("4"));
    $("#fivePM .time-block").val(localStorage.getItem("5"));
  });