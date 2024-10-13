// Set the countdown date in UTC
const countdownDate = new Date("2024-10-13T14:00:00Z").getTime();

// Function to generate countdown HTML and insert into page
function createCountdownWidget() {
    const container = document.getElementById('countdown-container');
    container.innerHTML = `
                <div class="countdown">
                    <div>
                        <span id="days">00</span>
                        <small>Days</small>
                    </div>
                    <div>
                        <span id="hours">00</span>
                        <small>Hours</small>
                    </div>
                    <div>
                        <span id="minutes">00</span>
                        <small>Minutes</small>
                    </div>
                    <div>
                        <span id="seconds">00</span>
                        <small>Seconds</small>
                    </div>
                </div>
            `;
}

// Function to pad numbers with leading zero if necessary
function padNumber(number) {
    return number < 10 ? '0' + number : number;
}

// Function to calculate and update countdown
function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = padNumber(days);
    document.getElementById("hours").innerText = padNumber(hours);
    document.getElementById("minutes").innerText = padNumber(minutes);
    document.getElementById("seconds").innerText = padNumber(seconds);

    // If countdown is finished
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector(".container").innerHTML = "<h1>We're Live!</h1>";
    }
}

// Create the countdown widget and start the countdown
createCountdownWidget();
updateCountdown(); // Initial call to display values immediately
const countdownFunction = setInterval(updateCountdown, 1000);
