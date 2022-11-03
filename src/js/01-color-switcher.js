const colorSwitcher = document.querySelector('body');
const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
let intervalId = null; 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStop.setAttribute('disabled', '');

btnStart.addEventListener('click', element => {
    element.target.setAttribute('disabled', true);
    btnStop.removeAttribute('disabled');

    intervalId = setInterval(() => {
        colorSwitcher.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

btnStop.addEventListener('click', element => {
    element.target.setAttribute('disabled', true);
    btnStart.removeAttribute('disabled');

    clearInterval(intervalId);
});
