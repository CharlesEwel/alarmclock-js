function alarmClock(alarmTime, alarmNumber) {
  this.alarmTime=alarmTime;
  this.alarmNumber=alarmNumber;
  console.log('is it working?');
}

alarmClock.prototype.Timer = function(){
  var convertedAlarmTime = moment(this.alarmTime, "HH:mm");
  var convertedAlarmTimeHour = convertedAlarmTime.hour();
  var convertedAlarmTimeMinute = convertedAlarmTime.minute();
  var specificAlarm = this.alarmNumber;
  myTimer=setInterval(function(){
    console.log("Iterating")
      var currentTimeHour = moment().hour();
      var currentTimeMinute = moment().minute();
      if(currentTimeHour>=convertedAlarmTimeHour && currentTimeMinute>=convertedAlarmTimeMinute)
      {
        console.log("Should be ringing")
        $("div[alarmNumber='"+specificAlarm+"']").show();
      }
    }
    , 10000);
  myTimer;
}

exports.timeModule = alarmClock;
