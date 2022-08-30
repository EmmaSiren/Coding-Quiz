// for (i = 0; i < 5; i++) {
//     highScores();
// }
function highScores() {
    for (i = 0; i <= localStorage.length-1; i++) {
        var counter = document.querySelector('#scores');
        var counted = document.createElement('h1');
        counted.textContent = (localStorage.getItem("initials")) + ": " + (localStorage.getItem("score"));
        counter.appendChild(counted);
        };
    };
    highScores();

// highScores();


// var i = 0;


// questionsArray[i].options.forEach(myFunction);

//     function myFunction(option) {