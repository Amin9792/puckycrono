let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
const timerDisplay = document.getElementById('timerDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function startTimer() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        running = true;
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }
}

function stopTimer() {
    if (running) {
        clearInterval(tInterval);
        running = false;
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    timerDisplay.innerHTML = "00:00:00";
    difference = 0;
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    timerDisplay.innerHTML = hours + ':' + minutes + ':' + seconds;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize the state of buttons
stopBtn.disabled = true;

