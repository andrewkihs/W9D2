
require("./asteroid");
require("../dist/canvas");
require("./bullet");
require("./game_view");
require("./game");
require("./moving_object");
require("./ship");
require("./utils");

// console.log("Webpack workiing");

const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

window.addEventListener('DOMContentLoaded', (event) => {
  
    const canvasEle = document.getElementById("game-canvas");
    const ctx = canvasEle.getContext("2d");

    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    });

    mo.draw(ctx);
    mo.move();
    mo.draw(ctx);


});

// import _ from 'lodash';

// function component() {
//     const element = document.createElement('div');

//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;
// }

// document.body.appendChild(component());