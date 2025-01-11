let container = document.querySelector('.canvas-container');
let canvas;
let ctx;
let lines;
let linesCount;

const minWidth = 10;
const maxWidth = 30;
const minHeight = 200;
const maxHeight = 600;
const backgroundColor = '#000000';
const minTTL = 100;
const maxTTL = 300;

function init() {
    setCanvas();
    resizeReset();
    animationLoop();
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
    linesCount = 10;

    for (let i = 0; i < linesCount; i++) {
        lines.push(new Line());
    }
}

function animationLoop() {
    ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);
    ctx.b.fillStyle = backgroundColor;
    ctx.b.fillRect(0, 0, canvas.b.width, canvas.b.height);

    for (let i = 0; i < lines.length; i++) {
        lines[i].update();
        lines[i].draw();
    }

    ctx.b.save();
    ctx.b.filter = 'blur(13px)';
    ctx.a.globalCompositeOperation = 'lighter';
    ctx.b.drawImage(canvas.a, 0, 0);
    ctx.b.restore();
    requestAnimationFrame(animationLoop);
}

function getRandomInt(min, max) {
    return Math.round((Math.random() * (max - min)) + min);
}

class Line {
    constructor() {
        this.x = getRandomInt(0, canvas.a.width);
        this.y = canvas.a.height / 2 + minHeight;
        this.width = getRandomInt(minWidth, maxWidth);
        this.height = getRandomInt(minHeight, maxHeight);
        this.hue = getRandomInt(120, 180);
        this.ttl = getRandomInt(minTTL, maxTTL);
        this.life = 0;
    }
    draw() {
        let gradient;
        gradient = ctx.a.createLinearGradient(this.x, this.y - this.height, this.x, this.y);
        gradient.addColorStop(0, `hsla(${this.hue}, 100%, 65%, 0)`);
        gradient.addColorStop(0.5, `hsla(${this.hue}, 100%, 65%, ${fadeInOut.this.life, this.ttl})`);
        gradient.addColorStop(1, `hsla(${this.hue}, 100%, 65%, 0)`);

        ctx.a.save();
        ctx.a.beginPath();
        ctx.a.strokeStyle = gradient;
        ctx.a.lineWidth = this.width;
        ctx.a.moveTo(this.x, this.y - this.height);
        ctx.a.lineTo(this.x, this.y);
        ctx.a.stroke();
        ctx.a.closePath();
        ctx.a.restore();
    }
    update() {
        this.life++;
        if (this.life > this.ttl){
            this.life = 0;
            this.x = getRandomInt(0, canvas.a.width);
            this.width = getRandomInt(minWidth, maxWidth);
        }

    }
}

window.addEventListener('DOMContentLoaded', init);
window.addEventListener('rezise', resizeReset);