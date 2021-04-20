
const Asteroid = require("./asteroid");
const Utils = require("./utils.js");
const MovingObject = require("./moving_object.js")

const DIM_X = 500;
const DIM_Y = 500;
const NUM_ASTEROIDS = 4;


function Game() {
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function(){
  for (let i = 0; i < NUM_ASTEROIDS; i++){
    let currentAsteroid = new Asteroid(this.randomPosition(), this)
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

Game.prototype.wrap = function(pos) {
  if (pos[0] > DIM_X) {
    pos[0] = 0;
  }
  if (pos[1] > DIM_Y) {
    pos[1] = 0;
  }
  if (pos[0] < 0) {
    pos[0] = DIM_X;
  }
  if (pos[1] < 0) {
    pos[1] = DIM_Y;
  }
  console.log("gamewrap");
  return [pos[0], pos[1]]; 
  
}

module.exports = Game;