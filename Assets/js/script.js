var questionCard = document.querySelector('#question');
var question = document.createElement('h1');
var optionSection = document.querySelector(".options");


var questionsArray = [
    {
        title: "What's Up?1", 
        options: ["Choice1", "Choice2", "Choice3", "Choice4"],
        correctAnswer: "Choice2"
    }, 
    {
        title: "What's Up?2", 
        options: ["Choice5", "Choice6", "Choice7", "Choice8"],
        correctAnswer: "Choice2"
    }, 
    {
        title: "What's Up?3", 
        options: ["Choice9", "Choice10", "Choice11", "Choice12"],
        correctAnswer: "Choice2"
    }, 
    {
        title: "What's Up?4", 
        options: ["Choice13", "Choice14", "Choice15", "Choice16"],
        correctAnswer: "Choice2"
    }, 
    {
        title: "What's Up?5", 
        options: ["Choice17", "Choice18", "Choice19", "Choice20"],
        correctAnswer: "Choice2"
    }
];

question.textContent = questionsArray[0].title
questionCard.appendChild(question);

// Cannot use normal for loop because that only loops through one array
// forEach loops through properties of an object
questionsArray[0].options.forEach(myFunction);

function myFunction(option) {
    var optionButtons = document.createElement('button');
    optionButtons.textContent = option;
    optionSection.appendChild(optionButtons);


    optionButtons.addEventListener("click", nextQuestion);


};



function nextQuestion() {
    questionsArray[1].options.forEach(myFunction);
    optionSection.removeChild(optionButtons);
    function myFunction(option){
    question.textContent = questionsArray[1].title;

    var optionButtons = document.createElement('button');
    optionButtons.textContent = option;
    optionSection.appendChild(optionButtons);
  
    optionButtons.addEventListener("click", nextQuestion1);
};

};

function nextQuestion1(){
    console.log("hello");
};

// playGame();

// // function sample() {
// //     var counter = document.querySelector('#scores');
// //     var counted = document.createElement('h1');
// //     counted.textContent = count;
// //     counter.appendChild(counted);
// // };

//         // location.replace("../high-scores.html");

// var counter = 0;
// counter++;
// var questions = [true, false, false, true, true];
// questions[counter];

