function setAlarm() {
  const ms = document.querySelector('#alarm-time').valueAsNumber

  if(isNaN(ms)) {
    alert("invalid date")
    return
  } 

  const alarm = new Date(ms)
  const alarmTime = new Date(alarm.getFullYear, alarm.getUTCMonth, alarm.getUTCDate, alarm.getUTCHours, alarm.getUTCMinutes, alarm.getUTCSeconds)
  const differenceInMS = alarm.getTime - (new Date().getTime)

}