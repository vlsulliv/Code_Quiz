/*
1. use "start quiz" div to show questions with append child
2. add query selectors to buttons
3. check if selected answer matches correct ans
4. track answers by pushing into array
5. display results
6. add initials form
7. add initials to local store
*/

var questions = [{
  question: "The external JavaScript file must contain the <script> tag.",
  answers: {
      a: "true",
      b: "false",
  },
  correct: "false"
},
{
  question: "Which event occurs when the user clicks on an HTML element?",
  answers: {
      a: "onmouseclick",
      b: "onchange",
      c: "onmouseover",
      d: "onclick",
  },
  correct: "d"
},
{
  question: "Which operator is used to assign a value to a variable?",
  answers: {
      a: "-",
      b: "=",
      c: "x",
      d: "*b",
  },
  correct: "b"
},
{
  question: "Is JavaScript case-sensitive?",
  answers: {
      a: "No",
      b: "Yes",
  },
  correct: "b"
},
{
  question: "Where is the correct place to insert a JavaScript?",
  answers: {
      a: "The <head> section",
      b: "The <body> section",
      c: "Both the <head> section and the <body> section are correct",
  },
  correct: "c"
}]
let answers = [];
let output = [];

for(letter in questions[i].answers) {
  answers.push(
    '<label>'
      + '<input type="radio" name="question'+i+'" value="'+letter+'">'
      + letter + ': '
      + questions[i].answers[letter]
    + '</label>'
  );
}

output.push(
  `<div class=`
)

// use "start quiz" div to show questions with append child

// add query selector to buttons

//

//


/* Local Storage */
localStorage.setItem('test'); // add item
// localStorage.getItem('');        // get item
// localStorage.removeItem('');     // remove item
// localStorage.clear();             // clear all


[w3schools](https://www.w3schools.com/quiztest/result.asp)



