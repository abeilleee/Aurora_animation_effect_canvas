let container = document.querySelector('.canvas-container');
let canvas;
let ctx;
let lines;
let linesCount;

const minWidth = 10;
const maxWidth = 30;
const minHeight = 200;
const maxHeight = 600;

function init() {
    setCanvas();
    resizeReset();
}

function setCanvas() {
    canvas = {
        a: document.createElement('canvas'),
        b: document.createElement('canvas'),
    };
    ctx = {
        a: canvas.a.getContext('2d'),
        b: canvas.b.getContext('2d'),
    };
    canvas.b.style = 'position: fixed; left: 0; top: 0; width: 100%; height: 100%';
    container.appendChild(canvas.b);
}

function resizeReset() {
    canvas.a.width = window.innerWidth;
    canvas.a.height = window.innerHeight;

    ctx.a.drawImage(canvas.b, 0, 0);

    canvas.b.width = window.innerWidth;
    canvas.b.height = window.innerHeight;

    ctx.b.drawImage(canvas.a, 0, 0);

    lines = [];
    linesCount = 1;

    for (let i = 0; i < linesCount; i++) {
        lines.push(new lines());
    }
}

function getRandomInt(min, max) {
    return Math.round((Math.random() * (max - min)) + min);

}

class Line {
    constructor() {
        this.x = getRandomInt(0, canvas.a.width);
        this.y = getRandomInt(canvas.a.height / 2, canvas.a.height / 2);
        this.width = getRandomInt(minWidth, maxWidth);
        this.height = getRandomInt(minHeight, maxHeight);
    }
    draw() {

    }
    update() {

    }
}

window.addEventListener('DOMContentLoaded', init);
window.addEventListener('rezise', resizeReset);