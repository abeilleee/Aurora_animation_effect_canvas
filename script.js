let container = document.querySelector('.canvas-container');
let canvas;
let ctx;
let lines;
let count;

function init(){
    setCanvas();
    resizeReset();
}

function setCanvas(){
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

    ctx.a.drawImage(canvas.b, 0,0);

    canvas.b.width = window.innerWidth;
    canvas.b.height = window.innerHeight;

    ctx.b.drawImage(canvas.a, 0, 0);

    
}

window.addEventListener('DOMContentLoaded', init);
window.addEventListener('rezise', resizeReset);