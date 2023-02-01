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

canvas.style.width = '85vw';
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
    document.onmousemove = allowDrowing;
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
    canvas.width =element.clientWidth *  0.85; 
}

function clarityDrow () {
    clarityDrowElem(intro);
}

function allowDrowing(event) {
    if(event.pageX > canvas.width && event.pageY > canvas.height) {
        interruptDrowing();
    }
}

function drowing(event) {
    if(isDrowing === true) {
        context.beginPath();
        context.arc(mouseX, mouseY, 15,0 , 2*Math.PI, false);
        context.fillStyle = 'rgba(0,128,128,0.1)';
        context.fill();

        if(document.pageX > canvas.width && this.pageY > canvas.height) {
            console.log('true');
            interruptDrowing();
        }
        
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

// aside fo phones and tablets

const menu = document.getElementsByClassName('menu');

for (let i = 0; i< menu.length; i++) {
    menu[i].addEventListener('touchstart', function () {
        menu[i].style.backgroundColor = 'rgba(210,180,140,1)';
        menu[i].style.borderColor = 'rgba(210,180,140,1)';
    })
    menu[i].addEventListener('touchend', function () {
        menu[i].style.backgroundColor = 'white';
        menu[i].style.borderColor = 'rgba(255, 69, 0, 1)';

    })
}

//work for phones and tables

for (let i = 0; i< projects.length; i++) {
    projects[i].style.opacity = '0';
    projects[i].addEventListener('touchstart',opacityToOne);
    projects[i].addEventListener('touchmove',opacityToZero);
}





