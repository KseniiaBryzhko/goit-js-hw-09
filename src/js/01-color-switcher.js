const changeColorStartBtn = document.querySelector('[data-start]');
const changeColorStopBtn = document.querySelector('[data-stop]');
const body = document.body;
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColorStartBtn.addEventListener('click', () => {
  changeColorStartBtn.disabled = true;
  timerId = setInterval(() => {
    const changedColor = getRandomHexColor();
    body.style.backgroundColor = changedColor;
  }, 1000);
});

changeColorStopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  changeColorStartBtn.disabled = false;
});
