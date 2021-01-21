var canvas = document.getElementById('myCanvas');
var render = canvas.getContext('2d');
var height;
var width;
var mouseX;
var mouseY;
const img0 = document.getElementById("face0");
const img1 = document.getElementById("face1");
const img2 = document.getElementById("face2");
const img3 = document.getElementById("face3");
const img4 = document.getElementById("face4");
const img5 = document.getElementById("face5");
const img6 = document.getElementById("face6");
const img7 = document.getElementById("face7");
const img8 = document.getElementById("face8");

canvas.style.left = "0px";
canvas.style.top = "0px";
canvas.style.position = "absolute";

window.onresize = function () {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    drawFace();
}

document.onmousemove = function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    console.log("X = " + mouseX);
    console.log("Y = " + mouseY);
    drawFace();
}

window.onresize();

function drawFace() {
    var size = 200;
    var x = window.innerWidth / 2 - size / 2;
    var y = window.innerHeight / 2 - size / 2;
    render.beginPath();
    render.rect(x, y, size, size);
    switch (true) {
            //topleft
        case mouseY < y && mouseX < x:
            render.drawImage(img0,x,y);
            break;
            //top middle
        case mouseY < y && mouseX > x && mouseX < x+size:
            render.drawImage(img1,x,y);
            break;
            //top right
        case mouseY < y && mouseX > x+size / 2:
            render.drawImage(img2,x,y);
            break;
            //middle left
        case mouseY > y && mouseY < y+size && mouseX < x:
            render.drawImage(img3,x,y);
            break;
            //middle right
        case mouseY > y && mouseY < y+size && mouseX > x+size:
            render.drawImage(img5,x,y);
            break;
            //bottom left
        case mouseY > y+size && mouseX < x:
            render.drawImage(img6,x,y);
            break;
             //bottom Middle
        case mouseY > y+size && mouseX > x && mouseX < x+size:
            render.drawImage(img7,x,y);
            break;
            //bottom Right
        case mouseY > y+size && mouseX > x+size:
            render.drawImage(img8,x,y);
            break;
            //middle
        default:
            render.drawImage(img4,x,y);
            break;
    }
}
