var questionCard = document.querySelector('#question');
var optionSection = document.querySelector(".options");
var question = document.createElement('h1');
var counter = 0;
var i = 0;


var questionsArray = [
    {
        question: "What's Up?1", 
        options: ["Option1", "Option2", "Option3", "Option4"],
        answer: "Option2"
    }, 
    {
        question: "What's Up?2", 
        options: ["Option5", "Option6", "Option7", "Option8"],
        answer: "Option6"
    }, 
    {
        question: "What's Up?3", 
        options: ["Option9", "Option10", "Option11", "Option12"],
        answer: "Option10"
    }, 
    {
        question: "What's Up?4", 
        options: ["Option13", "Option14", "Option15", "Option16"],
        answer: "Option14"
    }, 
    {
        question: "What's Up?5", 
        options: ["Option17", "Option18", "Option19", "Option20"],
        answer: "Option18"
    }
];

// Cannot use normal for loop because that only loops through one array
// forEach loops through properties of an object
function playGame() {
    if (i != 5) {
    questionsArray[i].options.forEach(myFunction);

    function myFunction(option) {
        var optionButtons = document.createElement('button');
        // var sample = questionsArray[0].question;
        // console.log(sample);
        // question.textContent = sample;
        // questionCard.appendChild(question);
        question.textContent = questionsArray[i].question
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
        // alert("Correct!");
        console.log("Correct");
        counter++;
        console.log(counter);
    } else {
        // alert("Incorrect");
        console.log("Incorrect");
    };
    questionCard.innerHTML = "";
    optionSection.innerHTML = "";

    playGame(i++);
};


playGame();

function score() {
    question.textContent = "All Done!";
    questionCard.appendChild(question);

    var finalScore = document.createElement('h2');
    var initials = document.createElement('input');
    var submitInitials = document.createElement('input');
    initials.setAttribute("type", "text");
    submitInitials.setAttribute("type", "submit");
    submitInitials.textContent = "Submit";

    finalScore.textContent = "Great job! Your score: " + counter + ". " + "Enter your initials.";
    optionSection.appendChild(finalScore);
    optionSection.appendChild(initials);
    optionSection.appendChild(submitInitials);
    submitInitials.addEventListener("click", storeInitials);

    console.log(counter);
    localStorage.setItem("score", counter);

    function storeInitials() {
        // localStorage.setItem("initials", initials.value);
        var sample = initials.value;
        console.log(sample);
        var scoresArray = [];
        scoresArray.push(initials);
        localStorage.setItem("initials", scoresArray);
        console.log(scoresArray);

        // location.replace("../high-scores.html");
    };

};


// questions[counter];
