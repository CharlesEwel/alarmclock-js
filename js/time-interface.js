var alarmClock = require('./../js/time.js').timeModule;

$(document).ready(function(){
  $('#time').text(moment());

  $("#set-alarm").submit(function(){
    event.preventDefault();
    var alarmTime = $("#alarm-time").val();
    var newAlarm = new alarmClock(alarmTime);
    currentTimer = newAlarm.Timer();
  });

  $("#snooze").submit(function(event) {
    event.preventDefault();
    clearInterval(myTimer);
    $("#test").hide();
    var snoozeLength = $("#snooze-options").val();
    var alarmTime = moment().add(snoozeLength, 'minutes');
    var newAlarm = new alarmClock(alarmTime);
    currentTimer = newAlarm.Timer();
  });

  $("#turn-off-alarm").click(function(event){
    clearInterval(myTimer);
    $("#test").hide();
  });
});
