function highScores() {
        var counter = document.querySelector('#title');
        var counted = document.createElement('h3');
        counted.textContent = localStorage.getItem("initials") + ": " + (localStorage.getItem("score"));
        counter.appendChild(counted);
       
};

highScores();