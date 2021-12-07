/* 4 Essential tasks/functions:
1. start the game
2. set the next question
3. select answer and validate
4. clean up small tasks such as time, high score, etc... */


let score = 0; 
let userAnswers = [];
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
      if (--timer < 0) {timer = duration;}}, 1000);}
window.onload = function () {
  var fiveMinutes = 60 * 5,
      display = document.querySelector('#timer');
  startTimer(fiveMinutes, display);
};
console.log("====================================")

let questionElement = document.getElementById('question');
let answerButtonElements = document.getElementById('buttons')
let = startButton = document.getElementById('start-btn')
let questionContainer = document.getElementById('question-Container');
startButton.addEventListener('click', startGame)

function startGame() {
  console.log('game has started');
  startButton.classList.add('hide');
  questionContainerElement.classList.remove('hide')

}

function setNctQuestion() {

}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    let button = document.createElement('button')
    button.innerText = answer.text;
    button.classLis.add('btn');
    if(answer.correct) {
      answerButtonElements.removeChile
      ( answerButtonElements.removeChile)  }
  })
}

function resetState(){
  nextButton.classList.add('hide')
  while (answerButtonElements) firstChild();
}

function selectAnswer( {
  nextButton.classList.add('hide');
  while (answerButton

})




let questions = [
  {
    question: "Which of the following function of Array object removes the first element from an array and returns that element?\n(a) reverse()\n(b) shift()\n(c) slice()\n(d) some()",
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


