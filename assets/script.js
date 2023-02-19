let questions = [
    "As of 2022, what percentage of websites use Javascript for client side behavior?",
    "What do you need to add to your HTML page in order for your Javascript to have an affect on your webpage?",
    "Which of the following statements is true?",
    "What does a queryselector need to include?",
]

let startButton = document.getElementById('buttonSize')
let buttons = document.querySelectorAll('button')
let currentQ = 0

function startQuiz() {
    document.querySelector(".header").classList.add("hide")
    document.querySelector(".questionElements").classList.remove("hide")
}

function updateQuestion(currentQuestionIndex) {
    var question = document.querySelector('.questionElements')
    question.textContent = questions[currentQuestionIndex]
}

// updateQuestion(currentQ);
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        currentQ++
        updateQuestion(currentQ)
    })
}

startButton.addEventListener('click', startQuiz) 

// let questions = [
//     "Do you like cats?",
//     "Do you like dogs?"
// ]

// let buttons = document.querySelectorAll('button')
// let currentI = 0

// function updateQuestion(currentQuestionIndex) {
//     var el = document.getElementById('question')
//     el.textContent = questions[currentQuestionIndex]
// }

// updateQuestion(currentI)

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function() {
//         currentI++
//         updateQuestion(currentI)
//     })
// }