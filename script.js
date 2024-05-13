const countdownElement = document.getElementById('countdown');
startCountdown(countdownElement.textContent);


function startCountdown(seconds) {
    const countdownElement = document.getElementById('countdown');

    updateCountdown();

     
     function updateCountdown() {
        countdownElement.textContent = seconds
        seconds--

        // Check if the timer has reached zero
        if (seconds >= 0) {
            setTimeout(updateCountdown, 1000); // Call updateCountdown() after 1 second
        } else {
            countdownElement.textContent = "Time is up!"; // Display "Time is up!"
        }
    }
}
