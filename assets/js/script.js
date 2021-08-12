var body = document.body;
var score = 0;

var questionsArrayEl = [
    {
        Question: "1",
        choice: "?",
        choice: "?",
        choice: "?",
        choice: "?",
        answer: "?"
    },{
        Question: "2",
        choice: "?",
        choice: "?",
        choice: "?",
        choice: "?",
        answer: "?"
    },{
        Question: "3",
        choice: "?",
        choice: "?",
        choice: "?",
        choice: "?",
        answer: "?"
    },{
        Question: "4",
        choice: "?",
        choice: "?",
        choice: "?",
        choice: "?",
        answer: "?"
    },{
        Question: "5",
        choice: "?",
        choice: "?",
        choice: "?",
        choice: "?",
        answer: "?"
    },{
        Question: "6",
        choice: "?",
        choice: "?",
        choice: "?",
        choice: "?",
        answer: "?"
    },{
        Question: "7",
        choice: "?",
        choice: "?",
        choice: "?",
        choice: "?",
        answer: "?"
    },{
        Question: "8",
        choice: "?",
        choice: "?",
        choice: "?",
        choice: "?",
        answer: "?"
    },{
        Question: "9",
        choice: "?",
        choice: "?",
        choice: "?",
        choice: "?",
        answer: "?"
    },{
        Question: "10",
        choice: "?",
        choice: "?",
        choice: "?",
        choice: "?",
        answer: "?"
    },
];

var welcomeText = document.createElement("h2");
welcomeText.textContent = "Welcome to the Coding Quiz!"
welcomeText.setAttribute("style", "margin: auto; text-align: center; font-size: x-large");
body.appendChild(welcomeText);

var welcomeParaEl = document.createElement("p");
welcomeParaEl.textContent = "Welcome to the coding quiz. Test your knowledge of coding and try to get the high score! You will have 60 seconds to answer 10 coding related questions. Wrong answers subtract time.";
welcomeParaEl.setAttribute("style", "margin: 35px auto; text-align: center; font-size: larger");
body.appendChild(welcomeParaEl);

var startBtnEl = document.createElement("button");
startBtnEl.className = "submit";
startBtnEl.textContent = "Start Quiz!";
startBtnEl.setAttribute("style", "margin: auto; font-size: large");
startBtnEl.style.position = "relative";
startBtnEl.style.left = "48%";
startBtnEl.style.right = "48%";
body.appendChild(startBtnEl);

var startQuiz = function() {
    for(var i = 0; i < questionsArrayEl.length; i++) {
    };
};

startBtnEl.addEventListener("click", startQuiz());