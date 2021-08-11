var body = document.body;

var welcomeText = document.createElement("h2");
welcomeText.textContent = "Welcome to the Coding Quiz!"
welcomeText.setAttribute("style", "margin: auto; text-align: center; font-size: x-large");
body.appendChild(welcomeText);

var questEl = document.createElement("p");
questEl.textContent = "Test question?";
questEl.setAttribute("style", "margin: 35px auto; text-align: center; font-size: larger");
body.appendChild(questEl);

var startBtn = document.createElement("button");
startBtn.className = "submit";
startBtn.textContent = "Start";
startBtn.setAttribute("style", "margin: auto; font-size: large");
startBtn.style.position = "relative";
startBtn.style.left = "49%";
startBtn.style.right = "49%";
body.appendChild(startBtn);
