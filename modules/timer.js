// var retimer = require('retimer');
// var timer = retime(function () {
//   throw new Error('this should never get called!')
// }, 20)

// setTimeout(function () {
//   timer.reschedule(50)
//   setTimeout(function () {
//     timer.clear()
//   }, 10)
// }, 10)



let clock = document.getElementById('timer');

/* TIMER */

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ":" + seconds;
      if (--timer < 0) {timer = duration;}}, 1000);
    }

let begin = function() {
  var fiveMinutes = 60 * 5,
      display = document.querySelector('#timer');
  startTimer(fiveMinutes, display);
};



// window.onload = function () {
//   var fiveMinutes = 60 * 5,
//       display = document.querySelector('#timer');
//   startTimer(fiveMinutes, display);
// };