
const Utils = require("./utils.js");
const MovingObject = require("./moving_object.js")

const COLOR = "grey";
const RADIUS = 30;

function Asteroid (pos, game) { 
    MovingObject.call(this, {
        color: COLOR,
        radius: RADIUS,
        vel: Utils.randomVec(5),
        pos: pos,
        game: game
    });

};


Utils.inherits(Asteroid, MovingObject); 

module.exports = Asteroid; 