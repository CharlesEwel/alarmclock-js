var alarmClock = require('./../js/time.js').timeModule;

var currentTimer;

$(document).ready(function(){
  $('#time').text(moment());

  $("#set-alarm").submit(function(){
    event.preventDefault();
    var alarmTime = $("#alarm-time").val();
    var newAlarm = new alarmClock(alarmTime);
    currentTimer = newAlarm.Timer();
  });

  $("#turn-off-alarm").click(function(event){
    clearInterval(myTimer)
    $("#test").hide();
  });
});
