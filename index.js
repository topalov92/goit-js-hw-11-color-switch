const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

let timeOut = null;

const refs = {
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
  body: document.body,
};

refs.btnStart.addEventListener("click", colorSwitch);
refs.btnStop.addEventListener("click", removeColorSwitch);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function colorSwitch() {
  timeOut = setInterval(() => {
    bgColor(colors);
  }, 1000);
  refs.btnStart.setAttribute("disabled", true);
}

function removeColorSwitch() {
  clearTimeout(timeOut);
  refs.btnStart.removeAttribute("disabled");
}

function bgColor(colors) {
  refs.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}