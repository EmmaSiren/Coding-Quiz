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

// question.textContent = questionsArray[i].question
// questionCard.appendChild(question);

// Cannot use normal for loop because that only loops through one array
// forEach loops through properties of an object
function playGame() {

questionsArray[i].options.forEach(myFunction);

function myFunction(option) {
    // var question = document.createElement('h1');
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

    // function nextQuestion() {
    //      console.log("hello");

    //      var sample = questionsArray[0].question;

    //      for (i = 0; i < sample; i++) {
    //          question.textContent = questionsArray[i];
    //          questionCard.appendChild(question);

    //      };
    // };

};
};

function nextQuestion() {
    // console.log(this.innerText);
    // console.log(questionsArray[0].answer);
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
    if (i = 5) {
        console.log(counter);
    };
};

// location.replace("../high-scores.html");

// var questions = [true, false, false, true, true];
// questions[counter];
