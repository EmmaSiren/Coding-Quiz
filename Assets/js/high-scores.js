function highScores() {
    var counter = document.querySelector('#scores');
    var counted = document.createElement('h1');
    counted.textContent = (localStorage.getItem("allDone")) + ": " + (localStorage.getItem("count"));
    counter.appendChild(counted);
};

highScores();