
const Asteroid = require("./asteroid");
const Utils = require("./utils.js");
const MovingObject = require("./moving_object.js")

const DIM_X = 500;
const DIM_Y = 500;
const NUM_ASTEROIDS = 20;


function Game() {
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function(){
  for (let i = 0; i < NUM_ASTEROIDS; i++){
    let currentAsteroid = new Asteroid(this.randomPosition())
    this.asteroids.push(currentAsteroid);
  }
  // Asteroid(this.randomPosition())
}

Game.prototype.randomPosition = function(){
  return [(Math.floor(Math.random() * DIM_X)), (Math.floor(Math.random() * DIM_Y))]
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, DIM_X, DIM_Y);
  this.asteroids.forEach(asteroid => asteroid.draw(ctx));
}

Game.prototype.move = function(ctx) {
  this.asteroids.forEach(asteroid => asteroid.move(ctx));
}

module.exports = Game;