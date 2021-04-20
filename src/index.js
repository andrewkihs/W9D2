
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
    // const mo = new MovingObject({
    //     pos: [30, 30],
    //     vel: [10, 10],
    //     radius: 5,
    //     color: "#00FF00"
    // });

    // mo.draw(ctx);
    // mo.move();
    // mo.draw(ctx);

    // const asteroid = new Asteroid([250,250]);
    // console.log(asteroid);
    // asteroid.draw(ctx);

    // const g = new Game();

})


// import _ from 'lodash';

// function component() {
//     const element = document.createElement('div');

//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;
// }

// document.body.appendChild(component());