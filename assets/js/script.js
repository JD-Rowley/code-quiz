var startBtnEl = document.getElementById("start-btn");
var playAgainBtnEl = document.getElementById("play-again-btn");
var enterHighScoreEl = document.getElementById("enter-high-score");
var highScoreEl = document.getElementById("high-score");
var getHighScoreEl = document.getElementById("high-score-wrapper");
var welcomeBoxEl = document.getElementById("welcome");
var questionBoxEl = document.getElementById("question-box");
var questionEl = document.getElementById("question");
var answerBtnEl = document.getElementById("answer-buttons");
var answerConfirmEl = document.getElementById("answer-confirm");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var choices = document.getElementsByName("choices");

var timeLeft = 75;
var score = 0;

var question, choice, choices, chA, chB, chC, chD;
var shuffledQuestions, currentQuestionIndex;

var questions = [
    {
        question: "String values must be encased in _____ when being assigned to variables.",
        a: "Quotes",
        b: "Curly brackets",
        c: "Parentheses",
        d: "Commas",
        answer: "b"
    },{
        question: "The condition in an if/else statement is enclosed in _____.",
        a: "Curly brackets",
        b: "Quotes",
        c: "Parentheses",
        d: "Commas",
        answer: "c"
    },{
        question: "A(n) _____ window displays a box with a specified message and an okay button.",
        a: "Confirm",
        b: "Prompt",
        c: "Greeting",
        d: "Alert",
        answer: "d"
    },{
        question: "Arrays in Javascript can be used to store _____.",
        a: "Numbers and strings",
        b: "Other arrays",
        c: "Booleans",
        d: "All of the above",
        answer: "d"
    },{
        question: "DOM stands for _____",
        a: "Definition of Objects and Models",
        b: "Document Object Model",
        c: "Document Object Method",
        d: "DOM isn't an acronym.",
        answer: "b"
    },{
        question: "Using this, JavaScript can access and change all of the elements of an HTML document.",
        a: "APIs",
        b: "CSS",
        c: "DOM",
        d: "jQuery",
        answer: "c"
    },{
        question: "The ____ returns the first element within an HTML document that matches the specified selector.",
        a: "querySelector()",
        b: "return()",
        c: "getElementById()",
        d: "select()",
        answer: "a"
    },{
        question: "_____ is used to increment a count by 1 in if statements.",
        a: "+ 1",
        b: ".add(1)",
        c: "i++",
        d: "+",
        answer: "c"
    },{
        question: "_____ will print its contents in the Developer's Tools console.",
        a: "window.alert()",
        b: "console.log()",
        c: "print()",
        d: "document.return()",
        answer: "b"
    },{
        question: "Items in an array are contained in _____",
        a: "Curly brackets",
        b: "Parentheses",
        c: "Semi-colons",
        d: "Square brackets",
        answer: "d"
    },
];

// This function will start the quiz
function startQuiz() {
    // Hide the start/play again buttons and welcome text
    score = "";
    answerConfirmEl.textContent = "";
    startBtnEl.classList.add("hide");
    welcomeBoxEl.classList.add("hide");
    playAgainBtnEl.classList.add("hide");
    highScoreEl.classList.add("hide");
    enterHighScoreEl.classList.add("hide");
    getHighScoreEl.classList.add("hide");
    // Randomize the question order and create index so questions aren't reused
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    // Show question box so questions appear onscreen
    questionBoxEl.classList.remove("hide");
    answerBtnEl.classList.remove("hide");
    // Run showQuestion function
    showQuestion();
    quizTimer();
};

// This function refreshes the screen with new questions and answers
function showQuestion() {
    // Clear existing question and answers
    answerBtnEl.innerHTML = "";
    answerConfirmEl.classList.remove("hide");

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

// This function will check the answer
function checkAnswer(e) {
    // Assign variable to get element more quickly
    let choice = e.target.value;
    // Create a for loop to check choices against answers
    //  If choice = answer, then increase score
    if (choice === questions[currentQuestionIndex].answer) {
        score++;
        answerConfirmEl.textContent = "Correct!"
    } else {
    // If choice =/= answer, decrease time
        timeLeft = timeLeft - 15;
        answerConfirmEl.textContent = "Incorrect..."
    };
    // Add 1 to the current question index
    currentQuestionIndex++;

    // Run showQuestion function
    showQuestion();
}

// Timer function for countdown
function quizTimer() {
    // Begin timer at 75 seconds
    timeLeft = 75;

    // Decrement every one second
    var timeInterval = setInterval(function() {
        timeLeft--;

        // Display time left, when time reaches 0, clearInterval and end the game
        timerEl.textContent = "Time Left: " + timeLeft;
        if (timeLeft <= 0 || currentQuestionIndex >= questions.length) {
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);
};

function endGame() {
    // Score message changes depending on user's score
    if (score > 7) {
        questionEl.innerHTML = "<div> Great job! Your score is "+score+"!</div>";
    } else if (score <= 7) {
        questionEl.innerHTML = "<div> Your score is "+score+"!</div>";
    }
    if (timeLeft < 1) {
        if(score > 0) {
            questionEl.innerHTML = "<div>Time's up! Your score is "+score+".</div>"
        } else {
            questionEl.innerHTML = "<div>Time's up! Your score is 0.</div>"
        }
    };

    // Add or remove necessary elements on final page
    highScoreEl.classList.remove("hide");
    enterHighScoreEl.classList.remove("hide");
    playAgainBtnEl.classList.remove("hide");
    answerBtnEl.classList.add("hide");
    answerConfirmEl.classList.add("hide");
    getHighScoreEl.classList.remove("hide");
};

function saveHighScore() {
    // Set variable for score
    var name = highScoreEl.value;

    // Check if input is null
    if(!name) {
        alert("Enter your name!");
        return false;
    }

        // Variable to retrieve scores from localStorage
        var playerScores = JSON.parse(localStorage.getItem("highScores")) || [];

        // Object to store name and score
        var highScores = {
            name: name,
            score: score
        };

        // Save high scores in array
        playerScores.push(highScores);

        // Save scores object in localStorage
        localStorage.setItem(("highScores"), JSON.stringify(playerScores));

        // Alert player the score was saved
        alert("Score saved!");
    
    // Ask to play again, okay starts game, cancel reloads page
    var confirmPlayAgain = confirm("Would you like to play again?")
    if (confirmPlayAgain === true) {
        // Restart the quiz
        startQuiz();
    } else {
        // Reload main quiz screen
        window.location.reload();
    }
};

function renderScoreList() {
    // Retrieve names and scores from localStorage
    var scores = JSON.parse(localStorage.getItem("highScores"));
    // If they are null, return early
    if (!scores || null) {
        alert("No scores registered");
        return;
    } else {
    // List scores in alert window
        alert(JSON.stringify(scores));
    }
};

answerBtnEl.addEventListener("click", checkAnswer);
startBtnEl.addEventListener("click", startQuiz);
playAgainBtnEl.addEventListener("click", startQuiz);
enterHighScoreEl.addEventListener("click", saveHighScore);