let timeLeft = 1500; // 25 minutes
let timer;
let isRunning = false;
let cycle = 1;

const timerDisplay = document.getElementById("timer");
const cycleDisplay = document.getElementById("cycle");

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateDisplay() {
  timerDisplay.textContent = formatTime(timeLeft);
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timer);
        isRunning = false;
        alert("Pomodoro complete! ✨");
        cycle++;
        cycleDisplay.textContent = cycle;
        timeLeft = 1500;
        updateDisplay();
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = 1500;
  updateDisplay();
}

updateDisplay(); // on load
