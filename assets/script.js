var displayQ2 = document.getElementById("question-2")
var clickEl = document.getElementById("click")
var removeEl = document.getElementById('remove')
var opposite = document.getElementById('opposite')
var displayEl = document.getElementById("hello")

var answer = document.querySelector(".answer")
let correct = document.getElementById("correct")
let wrong = document.querySelector(".wrong")

var questionTwo = document.getElementById("question-2")

console.log(correct, answer)

// function displayIt(){
    
//     displayEl.style.display = "flex"
//     console.log("string", displayEl.style.display)

// }

// function removeIt() {
    
//     displayEl.style.display = "none"
//     console.log("string", displayEl.style.display)
// }
// console.log("string", displayEl.style.display)

function dualPurpose() {
   
    if (displayEl.style.display === "none") {
        displayEl.style.display = "flex"
        console.log('Should display flex')
    } else if (displayEl.style.display === "flex") {
        displayEl.style.display = "none"
        console.log('Should display none')
    }
    console.log("string", displayEl.style.display)
    }
    
// if()
function correctAnswer() {
    if(correct.style.color = "black") {
        correct.style.background = "green";
        console.log("correct")
    } else {
        correct.style.color = "black";
        correct.style.background = "green";
    }
}

function wrongAnswer() {
    if(wrong.style.color === "black") {
        wrong.style.color = "red";
    } else {
        wrong.style.color = "red";
    }
}

function nextQuestion() {

    questionTwo.style.display ==="none"
}

questionTwo.addEventListener('click', nextQuestion)
correct.addEventListener("click", correctAnswer)
wrong.addEventListener("click", wrongAnswer)
// removeEl.addEventListener('click', removeIt)
// clickEl.addEventListener("click", displayIt)