function alarmClock(alarmTime) {
  this.alarmTime = alarmTime;
}

alarmClock.prototype.Timer = function(){
  var convertedAlarmTime = moment(this.alarmTime, "HH:mm a");
  var convertedAlarmTimeHour = convertedAlarmTime.hour();
  var convertedAlarmTimeMinute = convertedAlarmTime.minute();

  myTimer=setInterval(function(){
      var currentTimeHour = moment().hour();
      var currentTimeMinute = moment().minute();
      if(currentTimeHour>=convertedAlarmTimeHour && currentTimeMinute>=convertedAlarmTimeMinute)
      {
        $("#test").show();
      }
    }
    , 10000);
  myTimer;
}

exports.timeModule = alarmClock;
