var startBtnEl = document.getElementById("start-btn");
var playAgainBtnEl = document.getElementById("play-again-btn");
var enterHighScoreEl = document.getElementById("enter-high-score");
var highScoreEl = document.getElementById("high-score");
var welcomeBoxEl = document.getElementById("welcome");
var questionBoxEl = document.getElementById("question-box");
var questionEl = document.getElementById("question");
var answerBtnEl = document.getElementById("answer-buttons");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");

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
        question: "As what, was the Black Temple formerly known?",
        a: "Hope's Light Chapel",
        b: "Karabor",
        c: "The Exodar",
        d: "Naaru",
        answer: "b"
    },{
        question: "Who was the first death knight?",
        a: "Arthas Menethil",
        b: "The Lich King",
        c: "Koltira Deathweaver",
        d: "Teron Gorefiend",
        answer: "d"
    },
];

// Create high score array
var highScores = [];

// This function will start the quiz
function startQuiz() {
    // Hide the start/play again buttons and welcome text
    score = "";
    startBtnEl.classList.add("hide");
    welcomeBoxEl.classList.add("hide");
    playAgainBtnEl.classList.add("hide");
    highScoreEl.classList.add("hide");
    enterHighScoreEl.classList.add("hide");
    // Randomize the question order and create index so questions aren't reused
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    // Show question box so questions appear onscreen
    questionBoxEl.classList.remove("hide");
    // Run showQuestion function
    showQuestion();
    timer();
};

// This function refreshes the screen with new questions and answers
function showQuestion() {
    // Clear existing question and answers
    answerBtnEl.innerHTML = "";

    // If there are no questions left, replace question text with user's score
    if (currentQuestionIndex >= questions.length) {
        endGame();
        // Break the loop
        return false;
    }

    // Assign values to questions array
    question = shuffledQuestions[currentQuestionIndex].question;
    chA = questions[currentQuestionIndex].a;
    chB = questions[currentQuestionIndex].b;
    chC = questions[currentQuestionIndex].c;
    chD = questions[currentQuestionIndex].d;

    // Assign above question values to question element
    questionEl.innerHTML = "<div>"+question+"</div>";

    // Generate buttons with answers from questions array
    answerBtnEl.innerHTML += "<button class='answer-buttons btn' name='choices' value='a'>"+ chA +"</button>";
    answerBtnEl.innerHTML += "<button class='answer-buttons btn' name='choices' value='b'>"+ chB +"</button>";
    answerBtnEl.innerHTML += "<button class='answer-buttons btn' name='choices' value='c'>"+ chC +"</button>";
    answerBtnEl.innerHTML += "<button class='answer-buttons btn' name='choices' value='d'>"+ chD +"</button>";
};

choices = document.getElementsByName("choices");
answerBtnEl.addEventListener("click", checkAnswer);


// This function will check the answer
function checkAnswer(e) {
    // Assign variable to get element more quickly
    let choice = e.target.value;
    // Create a for loop to check choices against answers

    //  If choice = answer, then increase score
    if (choice === questions[currentQuestionIndex].answer) {
        score++;
    } else {
    // If choice =/= answer, decrease time

    };
    // Add 1 to the current question index
    currentQuestionIndex++;

    // Run showQuestion function
    showQuestion();
}

// Timer function for countdown
function timer() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        timeLeft--;

        if (timeLeft = 0) {
            timerEl.innerHTML = timeLeft;
            clearInterval(timeInterval);
        }
    }, 1000)
}

function endGame() {
    // Score message changes depending on user's score
    if (score > 7) {
        questionEl.innerHTML = "<div> Great job! Your score is "+score+"!</div>";
    } else if (score > 3 && score < 7) {
        questionEl.innerHTML = "<div> Your score is "+score+"!</div";
    } else if (score < 3) {
        questionEl.innerHTML = "<div> Your score is "+score+". Better luck next time.</div>";
    } else {
        questionEl.innerHTML = "<div>Your score is 0. Keep trying.</div>";
    }

    // Show high score input and play again button
    highScoreEl.classList.remove("hide");
    enterHighScoreEl.classList.remove("hide");
    playAgainBtnEl.classList.remove("hide");
};

function saveHighScore() {
    var name = highScoreEl.value;

    // Check if input is null
    if(!name) {
        alert("Enter your name!");
        return false;
    }

        var playerScores = JSON.parse(localStorage.getItem(name, score)) || [];

        // Object to store name and score
        var highScores = {
            name: name,
            score: score
        };

        // getElementById("high-score").reset();
        playerScores.push(highScores);
        console.log(highScores);

        localStorage.setItem((name, score), JSON.stringify(playerScores));

        alert("Score saved!");

    createScoreList();
};

// Create a score list
function createScoreList() {
    var playerHighScores = JSON.parse(localStorage.getItem("highScores")) || [];
    alert(playerHighScores);
        for(i = 0; i < playerHighScores; i++) {
            var listItemEl = document.createElement("li");
            listItemEl.textContent = playerHighScores[i].name + " - " + playerHighScores[i].score;
            list.appendChild(listItemEl);
        }
};

startBtnEl.addEventListener("click", startQuiz);
playAgainBtnEl.addEventListener("click", startQuiz);
enterHighScoreEl.addEventListener("click", saveHighScore);