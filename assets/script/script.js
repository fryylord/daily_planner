    var timeDisplayEl = $('#time-display');
    
    let currentTime = moment().format("HH");

    $(".time-div").each(function () {
      var rowTime = $(this).attr("id").split("-")[1];
      
      if (currentTime == rowTime) {
        $(this).addClass("present");
      } else if (currentTime > rowTime) {
        $(this).removeClass("future");
        $(this).addClass("past");
      } else if (currentTime < rowTime) {
        $(this).removeClass("present");
        $(this).addClass("future");
      } 
    });
  
    function displayTime() {
      var rightNow = moment().format('hh:mm:ss a [on] MMM DD, YYYY ');
      timeDisplayEl.text(rightNow);
    }
    
    
    $(".saveBtn").click(function (event) {
      event.preventDefault();
      var value = $(this).siblings(".time-block").val();
      var time = $(this).parent().attr("id").split("-")[1];
      localStorage.setItem(time, value);
    });
  
    $("#hour-09 .time-block").val(localStorage.getItem("09"));
    $("#hour-10 .time-block").val(localStorage.getItem("10"));
    $("#hour-11 .time-block").val(localStorage.getItem("11"));
    $("#hour-12 .time-block").val(localStorage.getItem("12"));
    $("#hour-13 .time-block").val(localStorage.getItem("13"));
    $("#hour-14 .time-block").val(localStorage.getItem("14"));
    $("#hour-15 .time-block").val(localStorage.getItem("15"));
    $("#hour-16 .time-block").val(localStorage.getItem("16"));
    $("#hour-17 .time-block").val(localStorage.getItem("17"));

    setInterval(displayTime, 1000);