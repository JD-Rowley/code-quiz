var startBtnEl = document.getElementById("start-btn");
var questionBoxEl = document.getElementById("question-box");
var questionEl = document.getElementById("question");
var answerBtnEl = document.getElementById("answer-buttons");

var shuffledQuestions, currentQuestionIndex

startBtnEl.addEventListener("click", startQuiz);

function startQuiz() {
    startBtnEl.classList.add("hide");
    shuffledQuestions = questionsArrayEl.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0
    questionBoxEl.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionEl.innerText = question.question;
}

function selectAnswer() {

}








// var body = document.body;
// var questionEl = document.getElementById("question-box");
// var answerEl = document.getElementById("answer-box");
// var score = 0;

var questionsArrayEl = [
    {
        question: "On what world, does the majority of Warcraft take place?",
        choice: "Nathreza",
        choice: "Azeroth",
        choice: "Draenor",
        choice: "Kalimdor",
        answer: "Azeroth"
    },{
        question: "Which orc is responsible for the destruction of Draenor?",
        choice: "Gul'dan",
        choice: "Thrall",
        choice: "Ner'zhul",
        choice: "Illidan",
        answer: "Ner'zhul"
    },{
        question: "The guardian, Medivh, can shapeshift into what animal?",
        choice: "Clefthoof",
        choice: "Murloc",
        choice: "Horse",
        choice: "Raven",
        answer: "Raven"
    },{
        question: "This mage was schooled by the guardian, Medivh.",
        choice: "Jaina Proudmoore",
        choice: "Khadgar",
        choice: "Antonidas",
        choice: "Krasus",
        answer: "Khadgar"
    },{
        question: "This human kept the orc, Thrall, in servitud as a gladiator until his escape.",
        choice: "Varian Wrynn",
        choice: "Anduin Lothar",
        choice: "Daelin Proudmoore",
        choice: "Aedelas Blackmoore",
        answer: "Aedelas Blackmoore"
    },{
        question: "Which horde warchief destroyed the Vale of Eternal Blossoms, leading to the Siege of Orgrimmar?",
        choice: "Grommash Hellscream",
        choice: "Orgrim Doomhammer",
        choice: "Garrosh Hellscream",
        choice: "Thrall",
        answer: "Garrosh Hellscream"
    },{
        question: "Which titan heads the Burning Crusade?",
        choice: "Sargeras",
        choice: "Archimonde",
        choice: "Illidan",
        choice: "Kil'jaeden",
        answer: "Sargeras"
    },{
        question: "In what area is the dwarf capital, Ironforge, located?",
        choice: "Winterspring",
        choice: "Loch Modan",
        choice: "Dun Morogh",
        choice: "Elwynn Forest",
        answer: "Dun Morogh"
    },{
        question: "?",
        choice: "?",
        choice: "?",
        choice: "?",
        choice: "?",
        answer: "?"
    },{
        question: "10",
        choice: "?",
        choice: "?",
        choice: "?",
        choice: "?",
        answer: "?"
    },
];

// var welcomeText = document.createElement("h2");
// welcomeText.textContent = "Welcome to the Coding Quiz!"
// welcomeText.setAttribute("style", "margin: auto; text-align: center; font-size: x-large");
// body.appendChild(welcomeText);

// var welcomeParaEl = document.createElement("p");
// welcomeParaEl.textContent = "Welcome to the coding quiz. Test your knowledge of coding and try to get the high score! You will have 60 seconds to answer 10 coding related questions. Wrong answers subtract time.";
// welcomeParaEl.setAttribute("style", "margin: 35px auto; text-align: center; font-size: larger");
// body.appendChild(welcomeParaEl);

// var startBtnEl = document.createElement("button");
// startBtnEl.className = "submit";
// startBtnEl.textContent = "Start Quiz!";
// startBtnEl.setAttribute("style", "margin: auto; font-size: large");
// startBtnEl.style.position = "relative";
// startBtnEl.style.left = "48%";
// startBtnEl.style.right = "48%";
// body.appendChild(startBtnEl);

// var startQuiz = function() {
//     for(var i = 0; i < questionsArrayEl.length; i++) {
//         var questionOptionEl = document.querySelector("#question-box");
//         questionOptionEl = text.Content = questionsArrayEl[i];
//         questionOptionEl = setAttribute("value", questionsArrayEl[i]);
        
//         questions.appendChild(questionsArrayEl[i]);
//     };
// };

// startBtnEl.addEventListener("click", startQuiz());