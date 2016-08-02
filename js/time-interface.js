var alarmClock = require('./../js/time.js').timeModule;

$(document).ready(function(){
  $('#time').text(moment());

  $("#set-alarm").submit(function(){
    event.preventDefault();
    var alarmTime = $("#alarm-time").val();
    var newAlarm = new alarmClock(alarmTime);

    var convertedAlarmTime = moment(alarmTime, "HH:mm a");
    var convertedAlarmTimeHour = convertedAlarmTime.hour();
    var convertedAlarmTimeMinute = convertedAlarmTime.minute();

    // var minutesToAlarm = 60*(convertedAlarmTimeHour-currentTimeHour)+(convertedAlarmTimeMinute-currentTimeMinute);
    // var millisecondsToAlarm=60000*minutesToAlarm;
    setInterval(function(){
        var currentTimeHour = moment().hour();
        var currentTimeMinute = moment().minute();
        if(currentTimeHour===convertedAlarmTimeHour && convertedAlarmTimeMinute===currentTimeMinute)
        {
          $("#test").text("alarm is going off");
        }
      }
      , 10000);


  });
});
