// Define variables that grab HTML elements
var title = document.querySelector(".timer");
var questionCard = document.querySelector('#question');
var optionSection = document.querySelector(".options");
var button = document.querySelector(".hideDiv1");
var button2 = document.querySelector(".hideDiv2");
// Create a new element that will be appended to previously grabbed elements
var question = document.createElement('h1');
// Add a class to HTML element
title.setAttribute("class", "timer");
// Starts score counter and questions at 0
var counter = 0;
var i = 0;
// Starts timer at 30 seconds
var secondsLeft = 30;

// Function that will take care of the timer countdown
function timer() {
    // Define the 'countdown' as the actual timer countdown functionality
    var countdown = setInterval(function() {
        // Subtracts 1 from secondsLeft variable
        secondsLeft--;
        // Replaces start timer text and updates it as countdown continues
        title.textContent = "You have " + secondsLeft + " seconds left";
        // Set paramaters to when secondsLeft reaches 0 or less
        if(secondsLeft === 0 || secondsLeft < 0) {
            // Stops the running the countdown
            clearInterval(countdown);
            // Clears timer, questions, and options text from screen
            title.innerHTML = "";
            questionCard.innerHTML = "";
            optionSection.innerHTML = "";
            // Calls score function
            score();
        // Set parameter to when all questions are answered
        } else if( i === 5) {
            clearInterval(countdown);
            title.innerHTML = "";
            score();
        }
    // Run function every 1000 milliseconds (or 1 second)
    }, 1000);
};

// Calls timer function
timer();

// Write out all questions, options, and answers and sets them in an array object
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
            "[ ]", 
            "{ }", 
            "( )", 
            "< >"
        ],
        answer: "[ ]"
    }, 
    {
        question: "Which of the following is an object in JavaScript?", 
        options: [
            "null", 
            "numbers", 
            "strings", 
            "arrays"
        ],
        answer: "arrays"
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

// Function that will handle pushing questions and options
function mainQuiz() {
    if (i != 5) {
    // Cannot use normal for loop because that only loops through one array, forEach loops through properties of an object
    questionsArray[i].options.forEach(pushQuestions);

    // Pushes questions and options until looped through entire array
    function pushQuestions(option) {
        // Pushes new question to screen
        question.textContent = questionsArray[i].question;
        questionCard.appendChild(question);
        
        // Creates options buttons
        var optionButtons = document.createElement('button');
        // Pushes question's corresponding options to screen
        optionButtons.textContent = option;
        optionSection.appendChild(optionButtons);

        // Adds click event listener to each option and runs checkAnswer function
        optionButtons.addEventListener("click", checkAnswer);

    };
    // If all questions have been displayed run score function
    } else {
       score();
    };
};

// Function that will compare option clicked to answer
function checkAnswer() {
    // Parameter for option clicked equal to the answer
    if (this.innerText === questionsArray[i].answer) {
        // Increase score counter
        counter++;
    // If option clicked does not equal answer
    } else {
        // Subtract five seconds from timer
        secondsLeft -= 5;
    };

    // Clear previous question and options
    questionCard.innerHTML = "";
    optionSection.innerHTML = "";
    
    // Increases questionsArray which makes the quiz loop through questions and options
    mainQuiz(i++);
};

// Function that will display score, ask for initials input, and set both to local storage
function score() {
    // Grabs HTML element for white line that separates questions from options
    var line = document.querySelector(".card-header");
    // Removes line
    line.classList.remove("card-header");

    // Replaces questions with done message
    question.textContent = "All Done!";
    questionCard.appendChild(question);
    // Creates new element to house final score message
    var finalScore = document.createElement('h2');

    // Parameter for score above 3, set Win message
    if (counter >= 3) {
    finalScore.textContent = "Great job! You scored " + counter + "! Enter your initials.";
    // If score is less than 3 set Lose message
    } else {
    finalScore.textContent = "You scored " + counter + ". Enter your initials.";
    };
    
    // Push win or lose message
    optionSection.appendChild(finalScore);

    // Creates input field for initials and button to submit them
    var initials = document.createElement('input');
    var submitInitials = document.createElement('input');
    // Sets text box type to input element for initials
    initials.setAttribute("type", "text");
    // Gives initials box a class for styling
    initials.setAttribute("class", "inputBox");
    // Sets submit type to input element for submitInitials
    submitInitials.setAttribute("type", "submit");
    // Sets submit element text
    submitInitials.textContent = "Submit";
    // Pushes initials and submitInitials elements to screen
    optionSection.appendChild(initials);
    optionSection.appendChild(submitInitials);
    // Adds click event listener to submit elementand runs storeInitials function
    submitInitials.addEventListener("click", storeInitials);

    // Function that will store score and initials in local storage
    function storeInitials() {
        // Stores initials submitted to local storage
        localStorage.setItem("initials", initials.value);
        // Stores counter value as score to local storage
        localStorage.setItem("score", counter);
        // Replaces win/lose message with thank you message
        finalScore.textContent = "Thank you " + initials.value + "!";
        // Removes all text fields
        questionCard.removeChild(question);
        optionSection.removeChild(submitInitials);
        optionSection.removeChild(initials);
        // Displays options to replay game or view scores
        button.classList.toggle("hideDiv1");
        button2.classList.toggle("hideDiv2");
    };
};

// Calls mainQuiz function
mainQuiz();
