let container = document.querySelector('.canvas-container');
let canvas;
let ctx;

function init(){
    setCanvas();
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