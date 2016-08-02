var alarmClock = require('./../js/time.js').timeModule;
var numberOfAlarms=0;

$(document).ready(function(){
  $('#time').text(moment());

  $(".set-alarm").submit(function(event){
    event.preventDefault();
    var alarmNumber=$(".alarm-number").val();
    var alarmTime = $(".alarm-time").val();
    console.log(alarmTime);
    var newAlarm = new alarmClock(alarmTime, alarmNumber);
    console.log(newAlarm.alarmTime)
    newAlarm.Timer();
  });

  $(".snooze").submit(function(event) {
    event.preventDefault();
    var localAlarmNumber=$(this).attr('alarmNumber');
    clearInterval(myTimer);
    $("div[alarmNumber='"+localAlarmNumber+"']").hide();
    var snoozeLength = $(".snooze-options").val();
    var alarmTime = moment().add(snoozeLength, 'minutes');
    var newAlarm = new alarmClock(alarmTime, localAlarmNumber);
    currentTimer = newAlarm.Timer();
  });

  $(".turn-off-alarm").click(function(event){
    var localAlarmNumber=$(this).attr('alarmNumber');
    clearInterval(myTimer);
    $("div[alarmNumber='"+localAlarmNumber+"']").hide();
  });
  $("#another-alarm").click(function(event){
    numberOfAlarms++;
    var stringifiedAlarmForm = "<form class='form-group set-alarm'><input type='hidden' class='alarm-number' value='"+numberOfAlarms+"'><label for='alarm-time'>Alarm Time:</label> <input type='time' class='alarm-time' required><button type='submit'>Set Alarm</button></form><div class='output' alarmNumber='"+numberOfAlarms+"'><img src='img/alarm_clock.png' alt='ringing alarm clock'></div><form class='snooze'><label for='snooze-options'>How Many Minutes to Snooze?</label><input type='number' class='snooze-options' value='2'><button type='submit'>Snooze</button></form><button type='button' alarmNumber='"+numberOfAlarms+"' class='turn-off-alarm'>Turn Off Alarm</button>";
    $("#alarm-forms").append(stringifiedAlarmForm);
  });
});
