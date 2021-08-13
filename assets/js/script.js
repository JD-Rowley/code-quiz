var startBtnEl = document.getElementById("start-btn");
var welcomeBoxEl = document.getElementById("welcome");
var questionBoxEl = document.getElementById("question-box");
var questionEl = document.getElementById("question");
var answerBtnEl = document.getElementById("answer-buttons");

var score = 0;

var question, choice, choices, chA, chB, chC, chD;
var shuffledQuestions, currentQuestionIndex;

var questions = [
    {
        question: "On what world, does the majority of Warcraft take place?",
        a: "Nathreza",
        b: "Azeroth",
        c: "Draenor",
        d: "Kalimdor",
        answer: "b"
    },{
        question: "Which orc is responsible for the destruction of Draenor?",
        a: "Gul'dan",
        b: "Thrall",
        c: "Ner'zhul",
        d: "Illidan",
        answer: "c"
    },{
        question: "The guardian, Medivh, can shapeshift into what animal?",
        a: "Clefthoof",
        b: "Murloc",
        c: "Horse",
        d: "Raven",
        answer: "d"
    },{
        question: "This mage was schooled by the guardian, Medivh.",
        a: "Jaina Proudmoore",
        b: "Khadgar",
        c: "Antonidas",
        d: "Krasus",
        answer: "b"
    },{
        question: "This human kept the orc, Thrall, in servitude as a gladiator until his escape.",
        a: "Varian Wrynn",
        b: "Anduin Lothar",
        c: "Daelin Proudmoore",
        d: "Aedelas Blackmoore",
        answer: "d"
    },{
        question: "Which horde warchief destroyed the Vale of Eternal Blossoms, leading to the Siege of Orgrimmar?",
        a: "Grommash Hellscream",
        b: "Orgrim Doomhammer",
        c: "Garrosh Hellscream",
        d: "Thrall",
        answer: "c"
    },{
        question: "Which titan leads the Burning Crusade?",
        a: "Sargeras",
        b: "Archimonde",
        c: "Illidan",
        d: "Kil'jaeden",
        answer: "a"
    },{
        question: "In what area is the dwarf capital, Ironforge, located?",
        a: "Winterspring",
        b: "Loch Modan",
        c: "Dun Morogh",
        d: "Elwynn Forest",
        answer: "c"
    },{
        question: "9",
        a: "?",
        b: "?",
        c: "?",
        d: "?",
        answer: "?"
    },{
        question: "10",
        a: "?",
        b: "?",
        c: "?",
        d: "?",
        answer: "?"
    },
];

function startQuiz() {
    startBtnEl.classList.add("hide");
    welcomeBoxEl.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionBoxEl.classList.remove("hide");
    showQuestion();
};

// function setNextQuestion() {
//     showQuestion(shuffledQuestions[currentQuestionIndex]);
// };

// function createAnswerButtons() {
//     var answerContainerEl = document.createElement("div");
//     answerContainerEl.className = "answers";

//     var choiceButton1 = document.createElement("button");
//     choiceButton1.textContent = choice1;
//     choiceButton1.className = "answer-buttons";

//     answerContainerEl.appendChild(choiceButton1);

//     var choiceButton2 = document.createElement("button");
//     choiceButton2.textContent = choice2;
//     choiceButton2.className = "answer-buttons";

//     answerContainerEl.appendChild(choiceButton2);

//     var choiceButton3 = document.createElement("button");
//     choiceButton3.textContent = choice3;
//     choiceButton3.className = "answer-buttons";

//     answerContainerEl.appendChild(choiceButton3);

//     var choiceButton4 = document.createElement("button");
//     choiceButton4.textContent = choice4;
//     choiceButton4.className = "answer-buttons";

//     answerContainerEl.appendChild(choiceButton4);

//     return answerContainerEl;
// }

function showQuestion() {
    // questionEl.innerText = question.question;
    if (currentQuestionIndex >= questions.length) {
        questionEl = "<div> Your score is "+score+" !</div>";
        return false;
    }

    question = questions[currentQuestionIndex].question;
    chA = questions[currentQuestionIndex].a;
    chB = questions[currentQuestionIndex].b;
    chC = questions[currentQuestionIndex].c;
    chD = questions[currentQuestionIndex].d;

    questionEl.innerHTML = "<div>"+question+"</div>";

    answerBtnEl.innerHTML += "<button class='answer-buttons btn' name='choices' value='A'>"+ chA +"</button>";
    answerBtnEl.innerHTML += "<button class='answer-buttons btn' name='choices' value='B'>"+ chB +"</button>";
    answerBtnEl.innerHTML += "<button class='answer-buttons btn' name='choices' value='C'>"+ chC +"</button>";
    answerBtnEl.innerHTML += "<button class='answer-buttons btn' name='choices' value='D'>"+ chD +"</button>";
};

function checkAnswer() {
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].selected) {
            choice = choices[i].value;
        }
    }

    if (choice === shuffledQuestions[currentQuestionIndex].answer) {
        score++;
    }

    showQuestion();
}
startBtnEl.addEventListener("click", startQuiz);

answerBtnEl.addEventListener("click", checkAnswer);