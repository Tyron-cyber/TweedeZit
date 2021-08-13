"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let totalBoxes = 200;
let boxes = [];
let frameCount = 0;
let color = Utils.randomNumber(0, 360);
let size = 25;
let xMouse;
let yMouse;

// console.log(context);

setup();
update();




// window.onmousemove = move;





function setup() {
    context.textAlign = "center";
    context.fillStyle = "white";
    context.font = "bold 24pt Arial";


    for (let i = 0; i < totalBoxes; i++) {
        for (let j = 0; j < 100; j++) {
            let cube = {
                x: i * 10,
                y: j * 10,
                color: Utils.randomNumber(0, 360),
                size: 25,
                xSpeed: 2,
                move: function () {
                    // console.log(this);
                    drawBox(this);

                }
            };
            drawBox(cube);
            boxes.push(cube);
        }
       

        // console.log(drawBox);
        // console.log(cube);

    }
    
}

function update() {
    context.fillStyle = "black";
    context.fillText("No Signal", width / 2, height / 2);
    drawBox();
    
    // Utils.fillCircle(width / 2, 140, 90);
    // context.fillStyle = "white";

   

    
   
    // context.fillStyle = "white";
    // context.fillRect(frameCount, frameCount, width, height);




}

function drawBox(cube) {
    
    setInterval(() => {
        let x = cube.x;
        let y = cube.y;
        let size = cube.size;
        let colors = cube.color;
        // console.log(cube);
    
        context.fillStyle = Utils.hsl(colors, 90, 50);
        context.fillRect(x, y, size, size);
        context.fill();  }, 0.5);


}



/**
 * 
 * @param {MouseEvent} eventData 
 * 
 */
function move(eventData) {
    xMouse = eventData.pageX;
    yMouse = eventData.pageY;


}