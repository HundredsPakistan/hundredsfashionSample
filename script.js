// Function to start the countdown timer
function startTimer(duration, display) {
    let timer = duration, days, hours, minutes, seconds;
    
    setInterval(function () {
        // Calculate days, hours, minutes, and seconds
        days = Math.floor(timer / (24 * 60 * 60));
        hours = Math.floor((timer % (24 * 60 * 60)) / (60 * 60));
        minutes = Math.floor((timer % (60 * 60)) / 60);
        seconds = Math.floor(timer % 60);

        // Display the updated time values
        display.querySelector('.days h1').textContent = days + " :";
        display.querySelector('.hours h1').textContent = hours + " :";
        display.querySelector('.minutes h1').textContent = minutes + " :";
        display.querySelector('.seconds h1').textContent = seconds;

        // Decrease timer by 1 second
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

// Example of setting a timer for 3 days (in seconds)
window.onload = function () {
    let duration = 5 * 24 * 60 * 60; // 3 days in seconds
    let display = document.querySelector('.timer');
    startTimer(duration, display);
};

function clickHam() {
    var element = document.querySelector(".hambar");
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}
