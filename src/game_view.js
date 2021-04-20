const Game = require("./game");

function GameView(game, ctx) {
  this.game = game 
  this.ctx = ctx;

}

GameView.prototype.start = function () {
  const outer = this;
  setInterval(function(){ 
    outer.game.move(outer.ctx);
    outer.game.draw(outer.ctx);
   }, 20);
  // setInterval(function(){ console.log('drawing frame'); }, 20);
};
module.exports = GameView;