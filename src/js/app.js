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

function begin() {
  var x = document.getElementById('el')
  var y = document.getElementById('mcq')
  if(y.style.display === "none") {
    console.log("x")
    x.style.display = "none"
    console.log("y")
    y.style.display;
  } else {
    y.style.display = "none";
    x.style.display = "block";
  }
}

console.log("====================================")

let questions = [
  {
    question: "Which of the following function of Array object removes the first element from an array and returns that element?\n(a) reverse()\n(b) shift()\n(c) slice()\n(d) ome()",
    answer: "b"
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?\n (a) onmouseclick\n (b) onchange\n (c) onmouseover\n (d) onclick",
    answer: "d"
  },
  {
    question: "Which operator is used to assign a value to a variable?\n(a) -\n (b) =\n (c) x\n (d) *b",
    answer: "b"
  },
  {
    question: "Which built-in method returns the calling string value converted to upper case?\n (a) toUpperCase()\n (b) toUpper()\n (c) changeCase(case)\n (d) None of the above",
    answer: "a"
  },
  {
    question: "Which of the following function of Boolean object returns a string containing the source of the Boolean object?\n (a) toSource()\n (b)  valueOf()\n (c)  toString()\n (d)  None of the above",
    answer: "a"
  },
  {
    question: "Which of the following function of String object returns the index within the calling String object of the first occurrence of the specified value?\n (a) substr(), (b)\n  search()\n (c)  lastIndexOf()\n (d)  indexOf()",
    answer: "d"
  }
]

let btn = document.getElementById('submit')
btn.addEventListener(onclick, function(e) {
  e.preventDefault;
  console.log('clicked')
  display();
})
const {one, two, three, four, five, six} = question
console.log(questions[0].question);
console.log(questions.one);
console.log(questions.two);

// for(var i=0; i<questions.length;i++){
//   var response = window.prompt(questions[i].prompt);
//   if(response == questions[i].answer){
//   score++
//   alert("good");
//   } else {
//     alert("incorrect");
//   }
// }
// alert("score: " + score);


localStorage.setItem(01, "vincent sullivan");