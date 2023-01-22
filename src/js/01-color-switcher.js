const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

btnStop.disabled = true;
let timerId = null;
const SWITCH_INTERVAL = 1000;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
btnStart.addEventListener('click', () => {
  btnStart.disabled = true;
  btnStop.disabled = false;
  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, SWITCH_INTERVAL);
});

btnStop.addEventListener('click', () => {
  btnStart.disabled = false;
  btnStop.disabled = true;
  clearInterval(timerId);
});

// btnStart.addEventListener('click', onStartChangeBGcolor);
// btnStop.addEventListener('click', onStopChangeBGcolor);
