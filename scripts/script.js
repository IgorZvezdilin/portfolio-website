            // intro

let flag  = true;
const login = document.getElementById('name-login');



let buttonSwitch = function (msgBeforeEvent, msgAfterEvent) {
    return function (event) {
        if (flag === true) {
        event.target.textContent = msgAfterEvent;
        flag = false;
        } else {
            event.target.textContent = msgBeforeEvent;
            flag = true;
        }
    }
}

login.addEventListener('click', buttonSwitch('Igor','Starsky'));

            // canvas
            
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d')
const hideCanvasBtn = document.getElementById('hideCanvasBtn');
const howDrowBtn = document.getElementById('howDrowBtn');
const intro = document.getElementById('intro');
const about = document.getElementById('about');

canvas.style.width = '92%';
canvas.style.height = '100vh';

clarityDrow();

let mouseX = 0;
let mouseY = 0;
let canvasFlag = true;
let isDrowing = true;

canvas.addEventListener('mousemove', setMousePosition, false);

drowingByClick();

window.onresize = function () {
    clarityDrow();
    drowingByClick();

}

hideCanvasBtn.addEventListener('click', hideCanvas('Stop Drowing 🖼️', 'Continue Drowing 🖌️'));
howDrowBtn.onclick = buttonSwitch('How to drow?', 'Click and Hold!');


function drowingByClick () {
    canvas.onmousedown = startDrowing;
    canvas.onmousemove = drowing;
    canvas.onmouseup = interruptDrowing;
} 

function hideCanvas(msgBeforeEvent, msgAfterEvent) {
    return function (event) {
        if (canvasFlag === true) {
        event.target.textContent = msgAfterEvent;
        canvas.style.display = 'none';
        canvasFlag = false;
        } else {
            event.target.textContent = msgBeforeEvent;
            canvas.style.display = 'block';
            canvasFlag = true;
        }
    }
}

function clarityDrowElem (element) {  
    canvas.height = element.clientHeight;
    canvas.width =element.clientWidth; 
}

function clarityDrow () {
    clarityDrowElem(intro);
}

function drowing() {
    if(isDrowing === true) {
        context.beginPath();
        context.arc(mouseX, mouseY, 15,0 , 2*Math.PI, false);
        context.fillStyle = 'rgba(0,128,128,0.1)';
        context.fill();

        requestAnimationFrame(drowing);
    }
}
function startDrowing () {
    isDrowing = true;
}
function interruptDrowing () {
    isDrowing = false;
}

function setMousePosition (event) {
    let canvasPos = canvas.getBoundingClientRect();
    mouseX = (event.clientX - canvasPos.left);
    mouseY = (event.clientY - canvasPos.top);
}

function getPositionElement (element) {
    let xPosition = 0;
    let yPosition = 0;

    while (element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop + element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return {
        x: xPosition,
        y: yPosition
    };
}

//work
const projects = document.getElementsByClassName('projectOnHover');
for(let i = 0; i< projects.length; i++) {
    projects[i].style.opacity = '0';
    projects[i].onmouseover = opacityToOne;
    projects[i].onmouseout = opacityToZero;
    
}

function opacityToOne () {
    this.style.opacity = '1';
}


function opacityToZero () {
    this.style.opacity = '0';
}

//contacts





