let clickedButton;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let minutes_prefix = "";
let seconds_prefix = "";
let milliseconds_prefix = "";
let duration = "00 : 00 : 00";

let stopWatch = (clickedButton) => {
  if (clickedButton == "start") {
    interval = setInterval(() => {
      start();
    }, 1);
  } else if (clickedButton == "stop") {
    clearInterval(interval);
    document.getElementById("stopwatch").innerHTML = duration;
  } else if (clickedButton == "reset") {
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById("stopwatch").innerHTML = "00 : 00 : 00";
  }
};

function start() {
  milliseconds++;
  if (milliseconds === 1000) {
    seconds++;
    milliseconds = 0;
  }
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  minutes_prefix = minutes < 10 ? "0" : "";
  seconds_prefix = seconds < 10 ? "0" : "";
  milliseconds_prefix = milliseconds < 10 ? "0" : "";

  duration =
    minutes_prefix +
    minutes +
    " : " +
    seconds_prefix +
    seconds +
    " : " +
    milliseconds_prefix +
    milliseconds;

  document.getElementById("stopwatch").innerHTML = duration;
}

function stop() {}
setInterval(() => {
  defaultTime();
}, 1000);

function defaultTime() {
  let startTime = new Date();
  document.getElementById("watch").innerHTML =
    startTime.getHours() +
    " : " +
    startTime.getMinutes() +
    " : " +
    startTime.getSeconds();
}

defaultTime();
document.getElementById("stopwatch").innerHTML = duration;
