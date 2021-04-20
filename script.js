// variable arrays for questions //
var questions = [
    {
        title: "Question 1: Arrays in Javascript can be used to store ________.",
        choices: ["numbers & strings", "other arrays", "booleans", "all of the above"], 
        correct: "all of the above"
    },

    {
        title: "Question 2: Commonly used datatypes do NOT include: ",
        choices: ["strings", "alerts", "booleans", "numbers"], 
        correct: "alerts"
    },

    {
        title: "Question 3: A very useful tool during the development and debugging for printing content is to the debugger is: ",
        choices: ["javascript", "for loops", "console.log", "terminal/bash"], 
        correct: "for loops"
    },

    {
        title: "Question 4: The condition in an if/else statement is enclosed by a -  ",
        choices: ["quotes", "curly brackets", "square brackets", "parenthesis"], 
        correct: "parenthesis"
    },

    {
        title: "Question 5: String values must be enclosed in ________ when being assigned to variables.",
        choices: ["curly brackets", "quotes", "paranthesis", "commas"], 
        correct: "quotes"
    }

]
    

var startBtn = document.getElementById("start-btn")
startBtn.addEventListener("click", function() {
    var questionsCon = document.getElementById("questionsCon");
    questionsCon.classList.remove("hide");

    startBtn.classList.add("hide");

    generateQuestion (1)

})

function generateQuestion(index) {
    var questionEl= document.getElementById("question");
    questionEl.textContent = questions[index].title
    
    var btn1= document.getElementById("answer-1");
    btn1.textContent = questions[index].choices[0];

    var btn2= document.getElementById("answer-2");
    btn2.textContent = questions[index].choices[1];

    var btn3= document.getElementById("answer-3");
    btn3.textContent = questions[index].choices[2];

    var btn4= document.getElementById("answer-4");
    btn4.textContent = questions[index].choices[3];

    
}