var table = document.getElementById("box");
    var fig1 = box.getContext("2d");
        fig1.strokeStyle = "rgb(255,0,0)";
        fig1.fillStyle =  "rgb(0,255,0)";

var greedSizeElement = 20;
var greedWidth = table.width /greedSizeElement;
var greedHeight = table.height / greedSizeElement;

var startX = 1;
var startY = 0;

var x = 10;
var y = 10;

var snake = [
{x:2,y:0},
{x:1,y:0},
{x:0,y:0}
];

function apple() {
var appleX = Math.floor(Math.random() * greedWidth);
var appleY = Math.floor(Math.random() * greedHeight);
}

function keyLog(event) {
console.log(event);
    if (event.key==="ArrowUp") {
        console.log("Arrow Up");
        startX = 0;
        startY = -1;
        }
    else if (event.key==="ArrowDown") {
    console.log("Arrow Down");
        startX = 0;
        startY = 1;
    }
    else if (event.key==="ArrowRight"){
    console.log("Arrow Right");
        startX = 1;
        startY = 0;
    }
    else if (event.key==="ArrowLeft"){
    console.log("Arrow Left");
        startX = -1;
        StartY = 0;
    }
    else
    console.log("Pleas press Arrow");
ё
}
document.addEventListener("keydown",keyLog);
/*
function screentext() {
console.log("Hej");
}
setInterval(screentext, 1000);
*/