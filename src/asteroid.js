
const Utils = require("./utils.js");
const MovingObject = require("./moving_object.js")

function Asteroid (pos) { 
    const COLOR = "grey";
    const RADIUS = 200;
    MovingObject.call(this, {
        color: COLOR,
        radius: RADIUS,
        vel: Utils.randomVec(5),
        pos: pos
    });

};


Utils.inherits(Asteroid, MovingObject); 

module.exports = Asteroid; 