$(function(){
  var saveBtn = $('.saveBtn')
  saveBtn.on('click', function(e){
    e.preventDefault()
    var apt = $(this).siblings(".description").val()
    var hr = $(this).parent().attr("id")
    localStorage.setItem(hr, apt)
  });

  function time() {
    var curHr = dayjs().hour()
    $(".time-block").each(function () {
      var blockHr = parseInt($(this).attr("id").split("-")[1]);
      if(blockHr < curHr){
        $(this).addClass("past")
      }else if(blockHr === curHr){
        $(this).removeClass("past")
        $(this).addClass("present")
      }else{
        $(this).removeClass("past")
        $(this).removeClass("present")
        $(this).addClass("future")
      }
    })
  }
  time()

  setInterval(time, 30000)

  $("#hour-9 .description").val(localStorage.getItem("hour-9"))
  $("#hour-10 .description").val(localStorage.getItem("hour-10"))
  $("#hour-11 .description").val(localStorage.getItem("hour-11"))
  $("#hour-12 .description").val(localStorage.getItem("hour-12"))
  $("#hour-13 .description").val(localStorage.getItem("hour-13"))
  $("#hour-14 .description").val(localStorage.getItem("hour-14"))
  $("#hour-15 .description").val(localStorage.getItem("hour-15"))
  $("#hour-16 .description").val(localStorage.getItem("hour-16"))
  $("#hour-17 .description").val(localStorage.getItem("hour-17"))

  function curTime() {
    var today = dayjs().format("MMM D, YYYY h:mm:ssa")
    var currentDay = $("#currentDay")
    currentDay.text(today)
  }

  curTime()
  setInterval(curTime, 1000)
});
