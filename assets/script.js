let questions = [
    {
        q:"As of 2022, what percentage of websites use Javascript for client side behavior?",
        options: ["23.5%", "98%", "84%"],
        answer: "b"
    },
    {
        q: "What do you need to add to your HTML page in order for your Javascript to have an affect on your webpage?",
        options: ["a", "b", "c"],
        answer: "c"
    },
    {
        q: "Which of the following statements is true?",
        options: ["a", "b", "c"],
        answer: "a"
    },
    {
        q: "What does a queryselector need to include?",
        options: ["a", "b", "c"],
        answer: "b"
    }
]

let startButton = document.getElementById('buttonSize')
// let buttons = document.querySelectorAll('button')
let currentQ = 0
var optionList = document.querySelector('.options')
var qHeader = document.querySelector('.qHeader')

// function updateQuestion(currentQuestionIndex) {
//     var el = document.getElementById('question')
//     el.textContent = questions[currentQuestionIndex]
// }

function startQuiz() {
    document.querySelector(".header").classList.add("hide")
    document.querySelector(".questionElements").classList.remove("hide")
    // document.querySelector(".button").classList.remove("hide")
    updateQuestion(currentQ)
}

function updateQuestion(currentQuestionIndex) {
   if (currentQuestionIndex > questions.length) {
    document.querySelector(".questionElements").classList.add("hide")
   } else {
    qHeader.textContent = questions[currentQuestionIndex].q
    // var question = document.querySelector('.questionElements')
    // question.textContent = questions[currentQuestionIndex]
    for (let i = 0; i < questions[currentQuestionIndex].options.length; i++) {
        const option = questions[currentQuestionIndex].options[i];
        var liOption = document.createElement('li')
        liOption.textContent = option
        optionList.append(liOption)
    }
    }
}

function cleanUpQuestion () {
    qHeader.innerHTML = ''
    optionList.innerHTML = ''
}

function optionChoice (event) {
    var target = event.target
    var choice = target.innerHTML
    console.log(choice)
    confirmChoice(choice)
}

function confirmChoice (selection) {
    if (selection === questions[currentQ].answer) {
        console.log("correct!")
    } else {
        console.log("wrong")
    }
    currentQ++
    cleanUpQuestion();
    updateQuestion(currentQ)
}

optionList.addEventListener('click', optionChoice)
startButton.addEventListener('click', startQuiz) 

// let questions = [
//     "Do you like cats?",
//     "Do you like dogs?"
// ]

// let buttons = document.querySelectorAll('button')
// let currentI = 0



// updateQuestion(currentI)

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function() {
//         currentI++
//         updateQuestion(currentI)
//     })
// }

//compare choice to correct answer

// updateQuestion(currentQ);
// for (let i = 0; i < opt.length; i++) {
//     opt[i].addEventListener('click', () => {
//         // var liOption = document.createElement('li')
//         // liOption.appendChild(optionList)
//         // currentQ++
//         // updateQuestion(currentQ)
//     })
// }

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', () => {
//         currentQ++
//         updateQuestion(currentQ)
//     })
// }