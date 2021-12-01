import questions from "./questions"

/* TIMER */
moment().format()
console.log(moment().format('LLL'))
console.log('MMMM Do YYYY, h:mm:ss a')

/* VAR DECLATIONS */
var score; 

/* TIMER */
const eventTime = 1366549200;
const currentTime = 1366547400;
const diffTime = eventTime - currentTime;
let duration = moment.duration(diffTime * 1000, 'milliseconds');
const interval = 1000;
const countdown = document.querySelector('time')

setInterval(() => {
  duration = moment.duration(duration - interval, 'milliseconds');
  countdown.innerText = "Time: " + duration.hours() + ":" + duration.minutes() + ":" + duration.seconds()
}, interval);

console.log("====================================")

for(var i=0; i<questions.length;i++){
  var response = window.prompt(questions[i].prompt);
  if(response == questions[i].answer){
  score++
  alert("good");
  } else {
    alert("incorrect");
  }
}
alert("score: " + score);


console.log("====================================")

localStorage.setItem(01, "vincent sullivan");