
// require("./asteroid");
// require("./bullet");
// require("./game_view");
// require("./moving_object");
// require("./ship");
// require("./utils");


require("../dist/canvas");
const Game = require("./game.js");
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const GameView = require("./game_view.js");


window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;


window.addEventListener('DOMContentLoaded', (event) => {
  
    const canvasEle = document.getElementById("game-canvas");
    const ctx = canvasEle.getContext("2d");
    const g = new Game();
    const gameview = new GameView(g, ctx)
    gameview.start();

})


// import _ from 'lodash';

// function component() {
//     const element = document.createElement('div');

//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;
// }

// document.body.appendChild(component());