
const Utils = require("./utils.js");
const MovingObject = require("./moving_object.js")

function Asteroid (pos) { 
    this.COLOR = "grey";
    this.RADIUS = 200;
    MovingObject.call(this);

    this.color = COLOR;
    this.radius = RADIUS;
    this.vel = Utils.randomVec(5);
    this.pos = pos;
};

// Asteroid.prototype.constructor = function (pos) {
//     MovingObject.call(this);

//     this.color = COLOR;
//     this.radius = RADIUS;
//     this.vel = Utils.randomVec(5);
//     this.pos = pos;
// }

Utils.inherits(Asteroid, MovingObject); 

module.exports = Asteroid; 