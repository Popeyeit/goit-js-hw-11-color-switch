const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    start: document.querySelector('button[data-action="start"]'),
    stop: document.querySelector('button[data-action="stop"]'),
    body: document.querySelector('body')
}

refs.start.addEventListener('click', addStyle)
refs.stop.addEventListener('click', stopAddStyle)

let intervalId = null

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function addStyle() {
    intervalId = setInterval(changeColor, 1000)
    refs.start.removeEventListener('click', addStyle)
}

function changeColor() {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
}

function stopAddStyle() {
    clearInterval(intervalId)
    refs.start.addEventListener('click', addStyle)
}