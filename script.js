document.addEventListener("DOMContentLoaded", () => {
  let timeLeft = 1500; // default to Pomodoro
  let timer;
  let isRunning = false;
  let currentMode = 'pomodoro';

  const timerDisplay = document.getElementById("timer");
  const modeLabel = document.getElementById("modeLabel");
  const pomodoroBtn = document.getElementById("pomodoroBtn");
  const shortBreakBtn = document.getElementById("shortBreakBtn");

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
          alert(currentMode === 'pomodoro' ? "Pomodoro complete! ✨" : "Break over! ⏰");
          resetTimer();
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
    timeLeft = currentMode === 'pomodoro' ? 1500 : 300;
    updateDisplay();
  }

  window.setMode = function(mode) {
    currentMode = mode;
    timeLeft = mode === 'pomodoro' ? 1500 : 300;
    updateDisplay();

    pomodoroBtn.classList.remove('active');
    shortBreakBtn.classList.remove('active');
    document.getElementById(mode + 'Btn').classList.add('active');

    pauseTimer();
  };

  window.startTimer = startTimer;
  window.pauseTimer = pauseTimer;
  window.resetTimer = resetTimer;

  updateDisplay();
});
