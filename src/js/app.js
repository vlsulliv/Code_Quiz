
/* 1. use "start quiz" div to show questions with append child
   2. add query selectors to buttons
   3. check if selected answer matches correct ans
   4. track answers by pushing into array
   5. display results
   6. add initials form
   7. add initials to local store */


/* TIMER */
moment().format()
console.log(moment().format('LLL'))
console.log('MMMM Do YYYY, h:mm:ss a')


console.log("==========================================================================================================================")

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

console.log("==========================================================================================================================")



let user_answers = [];
user_answers.push("A")
user_answers.push("A")
user_answers.push("A")
console.log(user_answers[0])
console.log(user_answers)

console.log("==========================================================================================================================")

let buildQuiz = document.getElementById("submit")
let clicker = 0;
buildQuiz.addEventListener('click', function(){
    console.log(clicker)
    let hide = document.getElementsByClassName('start-container');
    console.log('show')
    let show = document.getElementById('show');
    show.innerHTML = q1
    clicker = 1
    console.log(clicker)
})

function myFunction() {
  var x = document.getElementById("q");
  if (x.style.display === "none") {
    x.style.display = "block";
    showQuestion
  } else {
    x.style.display = "none";
  }
}
const targetDiv = document.getElementById("third");
const btn = document.getElementById("toggle");
btn.onclick = function () {
  let show = document.getElementsByClassName('show');

  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
    show.innerHTML(q1)

  } else {
    targetDiv.style.display = "block";
  }
};

function showQuestion(){
  let q = document.getElementById("el");
  q.innerHTML = q1
}

console.log("==========================================================================================================================")



let q1 = "Which of the following function of Array object removes the first element from an array and returns that element?"
let q2 = "Which event occurs when the user clicks on an HTML element?"
let q3 = "Which operator is used to assign a value to a variable?"
let q4 = "Which built-in method returns the calling string value converted to upper case?"
let q5 = "Which of the following function of Boolean object returns a string containing the source of the Boolean object?"
let q6 = "Which of the following function of String object returns the index within the calling String object of the first occurrence of the specified value?"

let q1_choices = "A: reverse(), B: shift(), C: slice(), D: ome()"
let q2_choices = "A: onmouseclick, B: onchange, C: onmouseover, D: onclick"
let q3_choices = "A: -, B:  = , C:  x , D:  *b , correct:  B "
let q4_choices = "A: toUpperCase() , B: toUpper() , C: changeCase(case) , D: None of the above" 
let q5_choices = "A: toSource() , B:  valueOf() , C:  toString() , D:  None of the above"
let q6_choices = "A: substr(), B:  search(), C:  lastIndexOf(), D:  indexOf()"

console.log("==========================================================================================================================")

let choices = ["q1_choices", ["A: reverse()", "B: shift()", "C: slice()", "D: ome()"]]
    // {q1_choices: [A: " onmouseclick", B: "onchange", C: "onmouseover", D: "onclick"]},
    // {question: "Which operator is used to assign a value to a variable?", A: "-", B: "=", C: "x", D: "*b"},
    // {A: "  toUpperCase()", B: "  toUpper()", C: "  changeCase(case)", D: "  None of the above" },
    // {A: "toSource()", B: "valueOf()", C: "toString()", D: "None of the above"},
    // {A: "substr()", B: "search()", C: "lastIndexOf()", D: "indexOf()"}

// for (i = 0; i)
let correct = ["B", "D", "B", "A", "A", "D"];


function display(){
let showQuestion = document.getElementsByClassName('start-container');

var displaySetting = startElement.style.display;
var submit = document.getElementById('submit');
if (displaySetting == 'block') {
  // clock is visible. hide it
  showQuestion.style.display = 'none';
  // change button text
  submit.innerHTML = 'Show clock';
} else {
  showQuestion = 'block'
  submit.innerHTML = 'show'
}}

localStorage.setItem(01, "vincent sullivan");