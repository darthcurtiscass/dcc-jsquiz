let questions = [
  {
    q: "As of 2022, what percentage of websites use Javascript for client side behavior?",
    options: ["23.5%", "98%", "84%"],
    answer: "98%",
  },
  {
    q: "What do you need to add to your HTML page in order for your Javascript to have an affect on your webpage?",
    options: [
      "A smiley face",
      "Relative path to the javascript file",
      "An algorithm to interpret and display the javascript",
    ],
    answer: "Relative path to the javascript file",
  },
  {
    q: "Which of the following statements is true?",
    options: [
      "Javascript can generate HTML elements",
      "HTML, CSS, cand Javascript are different coding languages and therfore cannot function together",
      "Javascript cannot be used to make video games",
    ],
    answer: "Javascript can generate HTML elements",
  },
  {
    q: "What does a querySelector need to include?",
    options: [
      "Link to the HTML page",
      "Corresponding HTML class or id from the HTML page",
      "Algorithm that generates new CSS elements",
    ],
    answer: "Corresponding HTML class or id from the HTML page",
  },
  {
    q: "",
    options: [],
    answer: "",
  },
];

let startButton = document.getElementById("buttonSize");
let currentQ = 0;
var optionList = document.querySelector(".options");
var qHeader = document.querySelector(".qHeader");
var q4 = questions[4];

var timerEl = document.querySelector(".timer");
var finalTime = document.querySelector("#time");
var timeLeft = 90;
timerEl.textContent = timeLeft;
var timeInterval;

var scoreKeeper = 0;
var scoreEl = document.querySelector(".score");
var finalScore = document.querySelector("#finalScore");

var nameText = document.querySelector("#name");

function startQuiz() {
  document.querySelector(".header").classList.add("hide");
  document.querySelector(".questionElements").classList.remove("hide");
  updateQuestion(currentQ);
  timeInterval = setInterval(function () {
    if (timeLeft > 1 && questions[currentQ] != questions[4]) {
      timerEl.textContent = timeLeft + "seconds";

      timeLeft--;
    } else if (questions[currentQ] === questions[4]) {
      endCountdown();
    } else if (timeLeft <= 0) {
      endCountdown();
    }
  }, 1000);
  //   countdown();
  console.log(questions[4]);
}

function updateQuestion(currentQuestionIndex) {
  if (currentQuestionIndex > questions.length) {
    document.querySelector(".questionElements").classList.add("hide");
  } else {
    qHeader.textContent = questions[currentQuestionIndex].q;

    for (let i = 0; i < questions[currentQuestionIndex].options.length; i++) {
      const option = questions[currentQuestionIndex].options[i];
      var liOption = document.createElement("button");
      liOption.textContent = option;
      optionList.append(liOption);
    }
  }
}

function cleanUpQuestion() {
  qHeader.innerHTML = "";
  optionList.innerHTML = "";
}

function optionChoice(event) {
  var target = event.target;
  var choice = target.innerHTML;
  console.log(choice);
  confirmChoice(choice);
}

function confirmChoice(selection) {
  if (selection === questions[currentQ].answer) {
    console.log("correct!");
    scoreKeeper += 1;
  } else {
    console.log("wrong");
    scoreKeeper -= 1;
  }
  scoreEl.textContent = scoreKeeper;
  currentQ++;
  cleanUpQuestion();
  updateQuestion(currentQ);
}

function endCountdown() {
  // timerEl.textContent = '';
  var message = "Your Score: ";
  var message2 = "Your Time: ";

  clearInterval(timeInterval);

  scoreEl.textContent = "";
  timerEl.textContent = "";

  var scoreMessage = document.createElement("h3");
  scoreMessage.textContent = message + scoreKeeper;
  finalScore.appendChild(scoreMessage);

  var timeMessage = document.createElement("h4");
  timeMessage.textContent = message2 + timeLeft;
  finalTime.append(timeMessage);


  var entry = document.createElement("input")
  var submit = document.createElement("button")
  var label = document.createElement("h5")
  
  label.textContent = "Enter Your name "

  entry.setAttribute("type", "text")

  submit.textContent = "Submit"

  nameText.append(label)
  nameText.append(entry)
  nameText.append(submit)

  entry.addEventListener("input", function() {
    // Get the value of the input field
    var inputText = entry.value;
  
    // Save the value to local storage
    localStorage.setItem("myInputValue", inputText);
    localStorage.setItem("myscore", scoreKeeper)
  });
}

optionList.addEventListener("click", optionChoice);
startButton.addEventListener("click", startQuiz);
