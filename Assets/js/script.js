var title = document.querySelector(".timer");
title.setAttribute("class", "timer");
var questionCard = document.querySelector('#question');
var optionSection = document.querySelector(".options");
var question = document.createElement('h1');
var counter = 0;
var i = 0;
var secondsLeft = 30;
var button = document.querySelector(".hideDiv1");
var button2 = document.querySelector(".hideDiv2");

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        title.textContent = "You have " + secondsLeft + " seconds left";
        if(secondsLeft === 0 || secondsLeft < 0 || i === 5) {
            clearInterval(timerInterval);
            title.innerHTML = "";
            score();
        }
    }, 1000);
};

setTime();

var questionsArray = [
    {
        question: "What does API stand for?", 
        options: [
            "Application Program Internet", 
            "Application Programming Interface", 
            "All Programming Interactions", 
            "Application Property Interface"
        ],
        answer: "Application Programming Interface"
    }, 
    {
        question: "Which is true of Web APIs?", 
        options: [
            "Web APIs use JavaScript to manipulate webpages", 
            "Web APIs are built into the web browser", 
            "Web APIs can change styling like CSS but through JavaScript", 
            "All of the above"
        ],
        answer: "All of the above"
    }, 
    {
        question: "What is the correct syntax for an array?", 
        options: [
            "[]", 
            "{}", 
            "()", 
            "<>"
        ],
        answer: "[]"
    }, 
    {
        question: "Which of the following is an object in JavaScript?", 
        options: [
            "null", 
            "numbers", 
            "strings", 
            "arrays"
        ],
        answer: "Arrays"
    }, 
    {
        question: "What does DOM stand for?", 
        options: [
            "Decode Objects Momentarily", 
            "Document Object Manipulation", 
            "Document Object Model", 
            "Decoding Observation Method"
        ],
        answer: "Document Object Model"
    }
];

// Cannot use normal for loop because that only loops through one array
// forEach loops through properties of an object
function playGame() {
    if (i != 5) {
    questionsArray[i].options.forEach(myFunction);

    function myFunction(option) {
        var optionButtons = document.createElement('button');
        question.textContent = questionsArray[i].question;
        questionCard.appendChild(question);

        optionButtons.textContent = option;
        optionSection.appendChild(optionButtons);

        optionButtons.addEventListener("click", nextQuestion);

    };
    } else {
       score();
    };
};

function nextQuestion() {
    if (this.innerText === questionsArray[i].answer) {
        counter++;
    } else {
        secondsLeft -= 5;
    };

    questionCard.innerHTML = "";
    optionSection.innerHTML = "";
    
    playGame(i++);
};

function score() {
    var line = document.querySelector(".card-header");
    line.classList.remove("card-header");

    question.textContent = "All Done!";
    questionCard.appendChild(question);
    var finalScore = document.createElement('h2');

    if (counter >= 3) {
    finalScore.textContent = "Great job! You scored " + counter + "! Enter your initials.";
    } else {
    finalScore.textContent = "You scored " + counter + ". Enter your initials.";
    };
    
    optionSection.appendChild(finalScore);

    var initials = document.createElement('input');
    var submitInitials = document.createElement('input');
    initials.setAttribute("type", "text");
    initials.setAttribute("class", "inputBox");
    submitInitials.setAttribute("type", "submit");
    submitInitials.textContent = "Submit";
    optionSection.appendChild(initials);
    optionSection.appendChild(submitInitials);
    submitInitials.addEventListener("click", storeInitials);


    function storeInitials() {
        localStorage.setItem("initials", initials.value);
        localStorage.setItem("score", counter);
        finalScore.textContent = "Thank you " + initials.value + "!";
        questionCard.removeChild(question);
        optionSection.removeChild(submitInitials);
        optionSection.removeChild(initials);
        button.classList.toggle("hideDiv1");
        button2.classList.toggle("hideDiv2");
    };
};

playGame();
