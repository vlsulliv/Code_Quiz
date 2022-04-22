let questions = [
	{
		"q1": "Which of the following function of Array object removes the first element from an array and returns that element?",
		"(a)": "reverse()",
		"(b)": "shift()",
		"(c)": "slice()",
		"(d)": "some()",
		"q1ans": "b"
	},
	{
		"q2": "Which event occurs when the user clicks on an HTML element?",
		"(a)": "onmouseclick",
		"(b)": "onchange",
		"(c)": "onmouseover",
		"(d)": "onclick",
		"q2ans": "d"
	},
	{
		"q3": "Which operator is used to assign a value to a variable?",
		"(a)": "-",
		"(b)": "=",
		"(c)": "x",
		"(d)": "*b",
		"q3ans": "b"
	},
	{
		"q4": "Which built-in method returns the calling string value converted to upper case?",
		"(a)": "toUpperCase()",
		"(b)": "toUpper()",
		"(c)": "changeCase(case)",
		"(d)": "None of the above",
		"q4ans": "a"
	},
	{
		"q5": "Which of the following function of Boolean object returns a string containing the source of the Boolean object?",
		"(a)": "toSource()",
		"(b)": "valueOf()",
		"(c)": "toString()",
		"(d)": "None of the above",
		"q5abs": "a"
	},
	{
		"q6": "Which of the following function of String object returns the index within the calling String object of the first occurrence of the specified value?",
		"(a)": "substr()",
		"(b)": "search()",
		"(c)": "lastIndexOf()",
		"(d)": "indexOf()",
		"q6ans": "d"
	}
]

console.log(questions)
let qx = questions;
console.log(qx[0].q1)
console.log(qx[0]);

let score = " "; 
let highScore = [];
let userInputs = [];


Array.from(document.getElementsByClassName("button"))
  .forEach((element) => element.style.size = "40px");

console.log(nextButton.style)
var startBtn = document.addEventListener('click', (e) => {
  e.preventDefault;

  for (i = 0; i<questions.length; i++) {
    console.log(questions)
  }

  
  console.log(questions)
  if (questions.length  === 0){
    question.innerHTML = "thank you for playing"
  }
})

function showNextButton(){
  var nextBtn = document.getElementById('next-btn');

}

/* button to initiate game. clicking start button will: display first question, display 'next' button, and begin timer */
function startGame() {
  console.log('game has started');
  startButton.classList.add('hide');
}


/* function to display subsequent questions */
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




/* functions to interact with local storage */
const ansKey = ["b", "d","b","a","a","d"];
function store() {
  if (ansKey.length !== 0) {
      JSON.stringify(localStorage.setItem("answers","ansKey"));
  }
}

function getItem() {
  JSON.parse(localStorage.getItem("ansKey"));
  return ansKey;
}


/* function to restart the game */
function resetState(){
  nextButton.classList.add('hide')
  while (answerButtonElements) firstChild();
}

var ansA = document.getElementById('a');
ansA.addEventListener('onClick', (e) => {
  e,preventDefault;
  console.log("a");
  return;
})

var ansB = document.getElementById('b');
ansA.addEventListener('onClick', (e) => {
  e,preventDefault
  console.log("b");
    return;
})

var ansC = document.getElementById('c');
ansA.addEventListener('onClick', (e) => {
  e,preventDefault;
  console.log("c");
    return;
})

var ansD = document.getElementById('d');
ansA.addEventListener('onClick', (e) => {
  e,preventDefault;
  console.log("d");
    return;
})