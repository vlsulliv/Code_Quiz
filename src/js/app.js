
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
console.log('dddd');
console.log("MMM Do YY");
console.log('YYYY [escaped] YYYY');
console.log("20111031", "YYYYMMDD");
console.log("20120620", "YYYYMMDD");
console.log(moment("20111031", "YYYYMMDD").fromNow()) 	// 9 years ago
console.log(moment("20120620", "YYYYMMDD").fromNow()); 	// 9 years ago
console.log(moment().startOf('minute').fromNow());        	// 2 hours ago
console.log(moment().endOf('day').fromNow());          	// in a day
console.log(moment().startOf('hour').fromNow()); 
console.log(moment().format('LT'));  
console.log(moment().format('LTS'));
console.log(moment().format('L')); 
console.log(moment().format('l'));    		
console.log(moment().format('LL'));  
console.log(moment().format('ll'));  
console.log(moment().format('s ss'));  
console.log(moment().format('1 mm'));  

console.log(moment.utc().seconds(30))

let timeInMinutes = 3*60*1000
let deadline = timeInMinutes - 1;
console.log(deadLine)
let duration = moment().duration(10, 'seconds');
console.log(duration)



/* LOCAL STORAGE */
localStorage.setItem(01, "vincent sullivan");
// localStorage.getItem('');        // get item
// localStorage.removeItem('');     // remove item
// localStorage.clear();             // clear all



/* QUESTIONS */
var questions = [
    {
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
    correct: "c"}
  ]
  
  let answers = [];
  let output = [];



// use "start quiz" div to show questions with append child

// add query selector to buttons


