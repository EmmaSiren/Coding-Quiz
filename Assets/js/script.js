var questionCard = document.querySelector('#question');
var question = document.createElement('h1');
var optionsSection = document.querySelector(".options");


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
    optionsSection.appendChild(optionButtons);

};







//     choice2.addEventListener('click', answer);

//     function answer() {
//         if (choice2.textContent == "Answer1") {
//             console.log("Answer1");
//             question2();
//             count++;
//             console.log(count);
//         } else if (choice4.textContent !== "Answer1") {
//             question2();
//         };
//     };

// }; 

// function question2() {
//     question.textContent = "Question 2";
//     questionCard.append(question);
    
//     choice1.textContent = "Choice4";
//     choice2.textContent = "Choice5";
//     choice3.textContent = "Choice6";
//     choice4.textContent = "Answer2";

//     choice4.addEventListener('click', answer2);

//     function answer2() {
//         if (choice4.textContent == "Answer2") {
//             console.log("Answer2");
//             question3();
//             count++;
//             console.log(count);
//         } else if (choice4.textContent !== "Answer2") {
//             question3();
//         };
//     };

// };

// function question3() {
//     question.textContent = "Question 3";
//     questionCard.append(question);
    
//     choice1.textContent = "Choice7";
//     choice2.textContent = "Choice8";
//     choice3.textContent = "Answer3";
//     choice4.textContent = "Choice9";

//     choice3.addEventListener('click', answer3);

//     function answer3() {
//         if (choice3.textContent === "Answer3") {
//         console.log("Answer3");
//         question4();
//         count++;
//         console.log(count);
//         } else if (choice4.textContent !== "Answer3") {
//             question4();
//         };
//     };

// };

// function question4() {
//     question.textContent = "Question 4";
//     questionCard.append(question);
    
//     choice1.textContent = "Answer4";
//     choice2.textContent = "Choice10";
//     choice3.textContent = "Choice11";
//     choice4.textContent = "Choice12";

//     choice1.addEventListener('click', answer4);

//     function answer4() {
//         if (choice1.textContent === "Answer4") {
//         console.log("Answer4");
//         question5();
//         count++;
//         console.log(count);
//         } else if (choice4.textContent !== "Answer4") {
//             question5();
//         };
//     };

// };

// function question5() {
//     question.textContent = "Question 5";
//     questionCard.append(question);
    
//     choice1.textContent = "Choice13";
//     choice2.textContent = "Choice14";
//     choice3.textContent = "Choice15";
//     choice4.textContent = "Answer5";

//     choice4.addEventListener('click', answer5);

//     // It's still taking the consolelog and logic from question 2 cause its in the same button. What do?
//     function answer5() {
//         if (choice4.textContent == "Answer5") {
//         console.log("Answer5");
//         count++;
//         console.log(count);
//         localStorage.setItem("count", count);
//         } else if (choice4.textContent !== "Answer5") {
//         };


//         var allDone = prompt("Great job! Your Score: " + count + ". " + "Enter your initials.");
//         localStorage.setItem("allDone", allDone);
//     };
    
// };

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

