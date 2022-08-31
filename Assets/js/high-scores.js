function highScores() {
        var counter = document.querySelector('#scores');
        var counted = document.createElement('h1');
        counted.textContent = localStorage.getItem("initials") + ": " + (localStorage.getItem("score"));
        counter.appendChild(counted);
       
};

highScores();