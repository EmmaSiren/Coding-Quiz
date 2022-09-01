// Function that pulls info from local storage and displays it on scores.html
function highScores() {
        // Variable that selects the element that will house the new data from local storage
        var counter = document.querySelector('#title');
        // Creates a new h3 element that will display local storage data
        var counted = document.createElement('h3');
        // Retrieves initials and score from local storage and concats it into a sentence then sets it as new element's text
        counted.textContent = localStorage.getItem("initials") + ": " + (localStorage.getItem("score"));
        // Appends created h3 element with new text to the 'counter' variable
        counter.appendChild(counted);
};

// Calls the function above
highScores();